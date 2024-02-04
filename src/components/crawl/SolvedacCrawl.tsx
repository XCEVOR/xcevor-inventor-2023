// src>app>component>crawl>SolvedacCrawl.tsx

'use client';

import React, { useEffect, useState } from 'react';

interface CrawlResult {
  rank?: string;
  error?: string;
}

const SolvedacCrawl = () => {
  const [crawlData, setCrawlData] = useState<CrawlResult>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/solvedac');
        console.log("response:", response)
        const data: CrawlResult = await response.json();
        // setCrawlData(data);
        
        // Split the string based on the word '전체' and extract only the latter part
        const rankParts = data.rank?.split('전체');
        const rankWithoutPrefix = rankParts && rankParts[1]?.trim();

        // Update status only when "rankWithoutPrefix" exists
        if (rankWithoutPrefix) {
          setCrawlData({ rank: rankWithoutPrefix });
        } else {
          console.error('This is not a valid data format.');
          setCrawlData({ error: 'Data format error' });
        }

        console.log("data:", data)
      } catch (error) {
        console.error('There was a problem while crawling:', error);
        setCrawlData({ error: 'Failed to load data.' });
      }
    };

    fetchData();
  }, []);

  return (
    <div className='text-sm text-[#F7F3ED] text-opacity-80 font-extralight'>
      {crawlData.error ? (
        <p>ERROR: {crawlData.error}</p>
      ) : (
        <div>
          <p>Rank {crawlData.rank} <span>(updated in real time)</span></p>
        </div>
      )}
    </div>
  );
};

export default SolvedacCrawl;
