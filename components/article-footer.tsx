'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type FeedbackItem = {
  id: string;
  feedback: string;
  topics: string;
  createdAt: string;
}

export default function ArticleFooter({ slug }: { slug: string }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([])
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'thoughts' | 'suggest'>('thoughts')
  
  // Form states
  const [feedbackInput, setFeedbackInput] = useState('')
  const [topicInput, setTopicInput] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  useEffect(() => {
    // Check if the user already liked this article in this browser
    if (localStorage.getItem(`liked_${slug}`)) {
      setLiked(true)
    }

    fetch(`/api/article?slug=${slug}`, { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
         setLikeCount(data.likes || 0)
         setFeedbacks(data.feedbacks || [])
      })
      .catch(() => {})
  }, [slug])

  const handleLike = async () => {
    if (liked) return 
    setLiked(true)
    setLikeCount(prev => prev + 1)
    
    // Save to localStorage immediately so it survives refreshes
    localStorage.setItem(`liked_${slug}`, 'true')
    
    await fetch('/api/article/like', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug })
    }).catch(() => {})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedbackInput.trim() && !topicInput.trim()) return
    
    setStatus('submitting')
    
    const res = await fetch('/api/article/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, feedback: feedbackInput, topics: topicInput })
    });
    const updatedData = await res.json();
    setFeedbacks(updatedData.feedbacks || []);
    
    setStatus('success')
    setFeedbackInput('')
    setTopicInput('')
    setTimeout(() => {
      setStatus('idle')
      setIsModalOpen(false)
    }, 2000)
  }

  const openModal = (tab: 'thoughts' | 'suggest') => {
    setActiveTab(tab)
    setIsModalOpen(true)
  }

  return (
    <>
      {/* 
        The Action Bar 
        Extremely minimalist, sits directly under the article.
      */}
      <div className="w-full bg-white py-10 border-t border-zinc-100 flex justify-center">
        <div className="flex items-center gap-2 sm:gap-6 bg-zinc-50 px-6 py-3 rounded-full border border-zinc-200/60 shadow-sm">
          
          {/* Like Action */}
          <button 
            onClick={handleLike}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${
              liked ? 'text-rose-500' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50'
            }`}
          >
            <motion.svg animate={liked ? { scale: [1, 1.3, 1] } : {}} width="18" height="18" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </motion.svg>
            <span className="font-medium text-sm">{likeCount}</span>
          </button>

          <div className="w-px h-5 bg-zinc-200"></div>

          {/* Thoughts Action */}
          <button 
            onClick={() => openModal('thoughts')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="font-medium text-sm">{feedbacks.length} Thoughts</span>
          </button>

          <div className="w-px h-5 bg-zinc-200"></div>

          {/* Suggest Topic Action */}
          <button 
            onClick={() => openModal('suggest')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/50 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span className="font-medium text-sm hidden sm:inline">Suggest Topic</span>
          </button>
        </div>
      </div>

      {/* The Interaction Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-x-0 bottom-0 sm:inset-auto sm:top-[10%] sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[80vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-white">
                <div className="flex gap-6">
                  <button 
                    onClick={() => setActiveTab('thoughts')}
                    className={`font-medium text-sm transition-colors ${activeTab === 'thoughts' ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'}`}
                  >
                    Thoughts
                  </button>
                  <button 
                    onClick={() => setActiveTab('suggest')}
                    className={`font-medium text-sm transition-colors ${activeTab === 'suggest' ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'}`}
                  >
                    Suggest Topic
                  </button>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors bg-zinc-50 rounded-full">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 bg-zinc-50">
                
                {/* Form Section */}
                <form onSubmit={handleSubmit} className="mb-10 bg-white p-5 rounded-xl border border-zinc-100 shadow-sm">
                  {activeTab === 'thoughts' ? (
                    <textarea 
                      value={feedbackInput}
                      onChange={(e) => setFeedbackInput(e.target.value)}
                      placeholder="What did you think of this piece?"
                      className="w-full bg-transparent border-0 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-0 resize-none text-sm min-h-[80px]"
                    />
                  ) : (
                    <textarea 
                      value={topicInput}
                      onChange={(e) => setTopicInput(e.target.value)}
                      placeholder="What should I write about next?"
                      className="w-full bg-transparent border-0 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-0 resize-none text-sm min-h-[80px]"
                    />
                  )}
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-zinc-50">
                    <span className="text-xs text-zinc-400 font-medium">
                      {status === 'success' ? 'Sent successfully!' : 'Will be visible to everyone.'}
                    </span>
                    <button 
                      type="submit"
                      disabled={activeTab === 'thoughts' ? !feedbackInput.trim() : !topicInput.trim()}
                      className="bg-black text-white font-medium text-xs px-5 py-2 rounded-full hover:bg-zinc-800 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Submit'}
                    </button>
                  </div>
                </form>

                {/* Public Comments List */}
                {activeTab === 'thoughts' && feedbacks.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Previous Thoughts</h4>
                    {feedbacks.slice().reverse().map(item => item.feedback && (
                      <div key={item.id} className="bg-white p-4 rounded-xl border border-zinc-100">
                        <p className="text-zinc-800 text-sm leading-relaxed">{item.feedback}</p>
                        <span className="text-[10px] text-zinc-400 font-medium block mt-3">{new Date(item.createdAt).toLocaleDateString()}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'suggest' && feedbacks.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Community Suggestions</h4>
                    {feedbacks.slice().reverse().map(item => item.topics && (
                      <div key={item.id} className="bg-white p-4 rounded-xl border border-zinc-100">
                        <p className="text-zinc-800 text-sm leading-relaxed">{item.topics}</p>
                        <span className="text-[10px] text-zinc-400 font-medium block mt-3">{new Date(item.createdAt).toLocaleDateString()}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
