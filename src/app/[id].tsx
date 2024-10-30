"use client"
import { useRouter } from 'next/router';
import { CofeList } from '../../src/app/(api)/CofeApi';
import Image from 'next/image';

const CofePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Перевірка, чи slug є рядком
  if (typeof id !== 'string') {
    return <div>Невірний формат slug</div>;
  }

  // Знайдіть каву за slug
  const cofe = CofeList.find((c) => c.id === Number(id));

  if (!cofe) {
    return <div>Кава не знайдена</div>;
  }

  return (
    <div>
      <h1>{cofe.name}</h1>
      <Image src={cofe.img} alt={cofe.name} width={280} height={360} />
      <p>{cofe.type}</p>
      <h3>${cofe.price}</h3>
    </div>
  );
};

export default CofePage;