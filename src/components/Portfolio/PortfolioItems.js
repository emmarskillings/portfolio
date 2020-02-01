import cardi1 from '../../images/cardi_1.png';
import cardi2 from '../../images/cardi_2.png';
import clock from '../../images/clock.png';
import cry from '../../images/cry.png';
import earrings from '../../images/earrings.png';
import fortune from '../../images/fortune.png';
import mugs1 from '../../images/mugs_1.png';
import mugs2 from '../../images/mugs_2.png';
import teacups from '../../images/teacups.png';
import top from '../../images/top.png';
import tote from '../../images/tote.png';

export const categories = [
  'Clothing',
  'Accessories',
  'Decoration',
  'Ceramics',
  'Music',
];

export const items = [
  {
    name: 'Daisy Top',
    category: 'Clothing',
    images: [top],
    ordering: 1,
  },
  {
    name: 'Everyday Tote',
    category: 'Accessories',
    images: [tote],
    ordering: 2,
  },
  {
    name: 'Eliza Cardigan',
    category: 'Clothing',
    images: [cardi1, cardi2],
    ordering: 3
  },
  {
    name: 'Yoke O\'Clock',
    category: 'Decoration',
    images: [clock],
    ordering: 4,
  },
  {
    name: 'Simplici-tea',
    category: 'Ceramics',
    images: [mugs1, mugs2],
    ordering: 5,
  },
  {
    name: 'Tea for Three',
    category: 'Ceramics',
    images: [teacups],
    ordering: 6,
  },
  {
    name: 'Cory Earrings',
    category: 'Accessories',
    images: [earrings],
    ordering: 7,
  },
  {
    name: 'Cry',
    category: 'Music',
    images: [cry],
    ordering: 8,
  },
  {
    name: 'Fortune Sweater',
    category: 'Clothing',
    images: [fortune],
    ordering: 9,
  },
];