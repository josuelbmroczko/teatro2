import { data } from "../data";
import { StyledSobre, StyledSobretexto } from "./styledsobr";

export default function SobreNos() {
  return (
    <>  
      <a id="sobre"></a>
      <StyledSobre>
        <StyledSobretexto>
          <span>{data.sobreNos.sobrenos}</span>
          <h2>{data.sobreNos.titulo}</h2>
          <p>{data.sobreNos.paragrafo1}</p>
          <p>{data.sobreNos.paragrafo2}</p>
          <p>{data.sobreNos.paragrafo3}</p>
          <p>{data.sobreNos.paragrafo4}</p>
          <p>{data.sobreNos.paragrafo5}</p>
          <p>{data.sobreNos.paragrafo6}</p>
          <p>{data.sobreNos.paragrafo7}</p>
          <p>{data.sobreNos.paragrafo8}</p>
          <p>{data.sobreNos.paragrafo9}</p>
          <p>{data.sobreNos.paragrafo10}</p>
          <p>{data.sobreNos.paragrafo11}</p>
          <p>{data.sobreNos.paragrafo12}</p>
          <p>{data.sobreNos.paragrafo13}</p>
          <p>{data.sobreNos.paragrafo14}</p>
          <p>{data.sobreNos.paragrafo15}</p>
          <p>{data.sobreNos.paragrafo16}</p>
          <p>{data.sobreNos.paragrafo17}</p>
          <p>{data.sobreNos.paragrafo18}</p>
          <p>{data.sobreNos.paragrafo19}</p>
          <p>{data.sobreNos.paragrafo20}</p>
        </StyledSobretexto>
         <img src={data.sobreNos.fotoAdv} alt="foto do teatro" />
      </StyledSobre>
     
    </>
  );
}
