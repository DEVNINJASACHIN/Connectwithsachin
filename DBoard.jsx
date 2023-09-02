<

  
import React, { FC, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import { alpha, useTheme } from '@material-ui/core/styles';
import ArrowRightIcon from '../../../icons/ArrowRight';
import ChevronDownIcon from '../../../icons/ChevronDown';
import ChevronUpIcon from '../../../icons/ChevronUp';

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const LineChart: FC<{ seriesData: number[] }> = ({ seriesData }) => {
  const theme = useTheme();

  const chart = {
    series: [
      {
        data: seriesData
      }
    ],
    // Other chart options
  };

  return <Chart type="line" width={120} {...chart} />;
};

const BarChart: FC<{ seriesData: number[] }> = ({ seriesData }) => {
  const theme = useTheme();

  const chart = {
    series: [
      {
        data: seriesData
      }
    ],
    // Other chart options
  };

  return <Chart type="bar" width={120} {...chart} />;
};

const AnalyticsGeneralOverview: FC = () => {
  const theme = useTheme();

  const [impressionsData, setImpressionsData] = useState<number[]>([]);
  const [spentData, setSpentData] = useState<number[]>([]);
  const [engagementsData, setEngagementsData] = useState<number[]>([]);
  const [conversionsData, setConversionsData] = useState<number[]>([]);

  useEffect(() => {
    fetchData('/api/impressions').then(data => setImpressionsData(data));
    fetchData('/api/spent').then(data => setSpentData(data));
    fetchData('/api/engagements').then(data => setEngagementsData(data));
    fetchData('/api/conversions').then(data => setConversionsData(data));
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item md={3} sm={6} xs={12}>
        <Card>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              p: 3
            }}
          >
            <div>
              <Typography color="textPrimary" variant="subtitle2">
                Impressions
              </Typography>
              <Typography color="textPrimary" sx={{ mt: 1 }} variant="h4">
                1.9M
              </Typography>
            </div>
            <LineChart seriesData={impressionsData} />
          </Box>
          <Divider />
          <Box sx={{ px: 3, py: 2 }}>
            <Button
              color="primary"
              endIcon={<ArrowRightIcon fontSize="small" />}
              variant="text"
            >
              
              See all visits
            </Button>
          </Box>
        </Card>
      </Grid>
      {/* Similar structure for other data blocks */}
    </Grid>
  );
};

export default AnalyticsGeneralOverview;
>
