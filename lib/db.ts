import fs from 'fs';
import path from 'path';

// Using a local JSON file as a simple persistent database
const dbPath = path.join(process.cwd(), 'database.json');

export type Feedback = {
  id: string;
  type: 'thought' | 'topic'; // explicit type so we can filter correctly
  text: string;
  createdAt: string;
};

export type ArticleData = {
  likes: number;
  feedbacks: Feedback[];
};

export type Database = {
  articles: Record<string, ArticleData>;
};

function readDb(): Database {
  try {
    if (!fs.existsSync(dbPath)) {
      const initialDb: Database = { articles: {} };
      fs.writeFileSync(dbPath, JSON.stringify(initialDb, null, 2));
      return initialDb;
    }
    const data = fs.readFileSync(dbPath, 'utf8');
    const parsed = JSON.parse(data);
    // Ensure articles key always exists
    if (!parsed.articles) parsed.articles = {};
    return parsed;
  } catch {
    const initialDb: Database = { articles: {} };
    fs.writeFileSync(dbPath, JSON.stringify(initialDb, null, 2));
    return initialDb;
  }
}

function writeDb(db: Database) {
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

export function getArticle(slug: string): ArticleData {
  const db = readDb();
  if (!db.articles[slug]) {
    return { likes: 0, feedbacks: [] };
  }
  return db.articles[slug];
}

export function addLike(slug: string): ArticleData {
  const db = readDb();
  if (!db.articles[slug]) {
    db.articles[slug] = { likes: 0, feedbacks: [] };
  }
  db.articles[slug].likes += 1;
  writeDb(db);
  return db.articles[slug];
}

export function addFeedback(slug: string, type: 'thought' | 'topic', text: string): ArticleData {
  if (!text || !text.trim()) {
    // Don't save empty entries
    return getArticle(slug);
  }

  const db = readDb();
  if (!db.articles[slug]) {
    db.articles[slug] = { likes: 0, feedbacks: [] };
  }

  const newFeedback: Feedback = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    type,
    text: text.trim(),
    createdAt: new Date().toISOString(),
  };

  db.articles[slug].feedbacks.push(newFeedback);
  writeDb(db);
  return db.articles[slug];
}
