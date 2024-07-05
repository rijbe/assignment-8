import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
   
    {
      "id": 1,
      "bookName": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "image": "https://i.ibb.co/7QBvqrd/kindpng-2592315-1.png",
      "review": "A powerful narrative on racial injustice and moral growth in the American South, told through the eyes of Scout Finch.",
      "totalPages": 324,
      "rating": 4.5,
      "category": "Fiction",
      "tags": ["Legal Drama", "Southern Gothic"],
      "publisher": "J.B. Lippincott & Co.",
      "yearOfPublishing": 1960
      
    },
    {
      "id": 2,
      "bookName": "1984",
      "author": "George Orwell",
      "image": "https://i.ibb.co/BKjs86p/kindpng-5624060-1.png",
      "review": "Orwell's dystopian masterpiece warns of the dangers of totalitarianism and surveillance, a chilling prophecy of a future society.",
      "totalPages": 328,
      "rating": 4.6,
      "category": "Fiction",
      "tags": ["Dystopian", "Political"],
      "publisher": "Secker & Warburg",
      "yearOfPublishing": 1949
      
    },
    {
      "id": 3,
      "bookName": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "image": "https://i.ibb.co/RgqJmpt/kindpng-2193744-1.png",
      "review": "A tale of decadence, idealism, and obsession set in the Jazz Age, where Jay Gatsby pursues an elusive American Dream.",
      "totalPages": 180,
      "rating": 4.3,
      "category": "Fiction",
      "tags": ["Classic", "Romance"],
      "publisher": "Charles Scribner's Sons",
      "yearOfPublishing": 1925
      
    },
   
    {
      "id": 4,
      "bookName": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "image": "https://i.ibb.co/hBGS7n9/kindpng-1064993.png",
      "review": "Bilbo Baggins embarks on an unexpected journey with dwarves and wizards, encountering dragons and elves in Tolkien's enchanting Middle-earth.",
      "totalPages": 310,
      "rating": 4.8,
      "category": "Fantasy",
      "tags": ["Adventure", "Epic"],
      "publisher": "George Allen & Unwin",
      "yearOfPublishing": 1937
      
    },
    {
      "id": 5,
      "bookName": "Pride and Prejudice",
      "author": "Jane Austen",
      "image": "https://i.ibb.co/mCMvKB9/kindpng-7318921.png",
      "review": "Austen's timeless romance explores love, marriage, and social manners in Georgian England, through the spirited Elizabeth Bennet and the enigmatic Mr. Darcy.",
      "totalPages": 279,
      "rating": 4.4,
      "category": "Fiction",
      "tags": ["Romance", "Classic"],
      "publisher": "T. Egerton, Whitehall",
      "yearOfPublishing": 1813
      
    },
    
    {
      "id": 6,
      "bookName": "The Road",
      "author": "Cormac McCarthy",
      "image": "https://i.ibb.co/1MHWTmB/kindpng-4945926-1.png",
      "review": "In a post-apocalyptic world, a father and son navigate a desolate landscape while confronting their own humanity in McCarthy's haunting narrative.",
      "totalPages": 241,
      "rating": 4.6,
      "category": "Fiction",
      "tags": ["Dystopian", "Survival"],
      "publisher": "Alfred A. Knopf",
      "yearOfPublishing": 2006
      
    }
  ]
  

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  return (
    <BarChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}

App.demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68';
