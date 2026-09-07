import React from 'react';
import { BlockLayout, Typography, Badge } from '../../../components/ui';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { WeeklyRankingItem } from '../types';

interface WeeklyRankingSidebarProps {
  rankingData: WeeklyRankingItem[];
  onItemClick?: (itemId: string) => void;
}

// Ranking change arrow component
const RankingChangeIcon: React.FC<{ change: number }> = ({ change }) => {
  if (change > 0) {
    return (
      <div className="flex items-center text-destructive">
        <TrendingUp className="w-3 h-3 mr-1" />
        <span className="text-xs font-medium">{change}</span>
      </div>
    );
  } else if (change < 0) {
    return (
      <div className="flex items-center text-success">
        <TrendingDown className="w-3 h-3 mr-1" />
        <span className="text-xs font-medium">{Math.abs(change)}</span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center text-muted-foreground">
        <span className="text-xs">-</span>
      </div>
    );
  }
};

export const WeeklyRankingSidebar: React.FC<WeeklyRankingSidebarProps> = ({
  rankingData,
  onItemClick,
}) => {
  return (
    <BlockLayout padding="default" shadow="xs">
      {/* Documentation */}
      <div className="flex items-center justify-between mb-4">
        <Typography variant="h3" className="font-medium">
          Weekly ranking
        </Typography>
        <Typography variant="muted" className="text-xs">
          Updated June 27, 2025
        </Typography>
      </div>
      
      {/* Documentation */}
      <div className="space-y-3">
        {rankingData.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center justify-between cursor-pointer hover:bg-muted/50 p-2 -m-2 rounded transition-colors duration-200"
            onClick={() => onItemClick?.(item.id)}
          >
            {/* Documentation */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Badge 
                variant={index < 3 ? 'destructive' : 'muted'}
                className="w-4 h-4 rounded-full p-0 text-xs flex items-center justify-center"
              >
                {index + 1}
              </Badge>
              <Typography 
                variant="body" 
                className="text-sm line-clamp-1 flex-1"
              >
                {item.title}
              </Typography>
            </div>
            
            {/* Documentation */}
            <RankingChangeIcon change={item.change} />
          </div>
        ))}
      </div>
    </BlockLayout>
  );
}; 