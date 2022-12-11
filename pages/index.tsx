import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Htag, Tag, Button, P, Rating, Input, TextArea  } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';




function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow='right' >Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <P size='s' >Маленький</P>
      <P>Средний</P>
      <P size='l' >Большой</P>

      <Tag size='m'>TAG</Tag>
      <Tag color='gray' size='m'>TAG</Tag>
      <Tag color='green' size='s'>TAG</Tag>
      <Tag color='red' size='m' href='#'>TAG</Tag>
      <Tag color='primary' size='s'>TAG</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
      <Input placeholder='Test'/>
      <TextArea placeholder='Test textarea'/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return{
    props: {
      menu, 
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}