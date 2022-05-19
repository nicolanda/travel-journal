import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { data } from "./data";


export const App = () => {
  const countries = data.map((info,index)=>
    {
    return(
      <Main
        key={info.title}
        info={info}
        barrita={data[index + 1]}
      />
    )
  });

  return(
    <div className="container">
      <Header />
      <section className="container--main">
        {countries}
      </section>
    </div>
)};