import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1; // Ocupa todo o espacamento restante
`;

const Galeria = ({ fotos = [] }) => {
  return (
    <>
      <Tags />

      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria </Titulo>
          <ul>
            {fotos.map(foto => <li>{foto.path}</li>)}  {/* percorre cada elemento do array */}
            </ul>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
