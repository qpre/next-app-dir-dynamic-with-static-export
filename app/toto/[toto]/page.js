export async function generateStaticParams() {
  return [{toto: 'foo'}, {toto: 'bar'}];
}


export default function TotoPage({ params }) {
  return <div>{params.toto}</div>;
}
