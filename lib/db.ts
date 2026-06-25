import fs from 'fs';
import path from 'path';

// Using a local JSON file as a simple persistent database
const dbPath = path.join(process.cwd(), 'database.json');

export type Feedback = {
  id: string;
  feedback: string;
  topics: string;
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
  if (!fs.existsSync(dbPath)) {
    const initialDb: Database = { articles: {} };
    fs.writeFileSync(dbPath, JSON.stringify(initialDb, null, 2));
    return initialDb;
  }
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
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

export function addFeedback(slug: string, feedback: string, topics: string): ArticleData {
  const db = readDb();
  if (!db.articles[slug]) {
    db.articles[slug] = { likes: 0, feedbacks: [] };
  }
  
  const newFeedback: Feedback = {
    id: Date.now().toString(),
    feedback,
    topics,
    createdAt: new Date().toISOString()
  };
  
  db.articles[slug].feedbacks.push(newFeedback);
  writeDb(db);
  return db.articles[slug];
}
