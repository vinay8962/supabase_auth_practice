"use client"; // Add this line
import { useState } from 'react';
import { motion } from 'framer-motion';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { getUser } from '@/utils/supabase/queries';
import Form from '@/components/ui/Form';

export default async function Account() {
  const supabase = createClient();
  const [user] = await Promise.all([
    getUser(supabase),

  ]);
  const [activeTab, setActiveTab] = useState('tab1');

  if (!user) {
    return redirect('/signin');
  }

  return (
    <section className="mb-32 bg-black">
      <div className="container mx-auto p-4 w-9/12">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${activeTab === 'tab1' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('tab1')}
          >
            View Review
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'tab2' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('tab2')}
          >
            Create Form
          </button>
        </div>
        <div>
          {activeTab === 'tab1' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 bg-gray-100 rounded h-1/2"
            >
              Content for Tab 1
            </motion.div>
          )}
          {activeTab === 'tab2' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 bg-gray-100 rounded h-1/2"
            >
              <Form />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
