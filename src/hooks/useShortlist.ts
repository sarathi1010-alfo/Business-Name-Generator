import { useState, useEffect } from 'react';
import { GeneratedName } from '../types';

export function useShortlist() {
  const [shortlist, setShortlist] = useState<GeneratedName[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('name-shortlist');
      if (saved) {
        setTimeout(() => setShortlist(JSON.parse(saved)), 0);
      }
    } catch (e) {
      console.error('Failed to load shortlist', e);
    }
  }, []);

  const toggleShortlist = (nameObj: GeneratedName) => {
    setShortlist((prev) => {
      const exists = prev.find(n => n.name === nameObj.name);
      let updated;
      if (exists) {
        updated = prev.filter(n => n.name !== nameObj.name);
      } else {
        updated = [...prev, nameObj];
      }
      try {
        localStorage.setItem('name-shortlist', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save shortlist', e);
      }
      return updated;
    });
  };

  const isInShortlist = (name: string) => shortlist.some(n => n.name === name);

  const clearShortlist = () => {
    setShortlist([]);
    localStorage.removeItem('name-shortlist');
  }

  return { shortlist, toggleShortlist, isInShortlist, clearShortlist };
}
