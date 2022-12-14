import styled from "styled-components"
import trash from  '../../asserts/icons/trash.svg'
import edit from  '../../asserts/icons/edit.svg'
import hand from  '../../asserts/icons/hand.svg'
import useGetPoke from "../../hooks/useGetPoke";

const Card = styled.div`
  width: 234px;
  height: 267px;
  border-radius: 8px;
  box-shadow: 0px 3px 6px #E5E5E5;
  background-color: white;
  border: 1px solid #E4E4E4;
  transition: ease-in-out 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const InfoArea = styled.button`
  width: 100%;
  display: flex;
  background-color: transparent;
  border: none;
  align-items: center;
  flex-direction: column;
  padding: 28px 21px 0px 21px;
  cursor: pointer;
`
const ActionsCard = styled.div`
width: 100%;
height: 55px;
margin-top: 28.83px;
display: flex;
align-items: center;
justify-content: center;
justify-items: center;
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
box-shadow: inset 0px 3px 6px #0000000F;
`

const DeleteButton = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  cursor: pointer;
  color: #c5c5c5;
  font-size: 15px;
  &:hover {
    color:#DB2525;
    opacity: 1;
  }
`
const Divider = styled.div`
border:1px solid #00000010;
height: 25px;
width: 1px;
`

const EditButton = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  cursor: pointer;
  color: #c5c5c5;
  font-size: 15px;
  &:hover {
    color:#E76316;
    opacity: 1;
  }
`

const ImgContainer = styled.div`
 width: 95px;
 height: 95px;
 border-radius: 100%;
 background-color: #F6F4F6;
 border: 1px solid #E4E4E4;
 display: flex;
 justify-content: center;
 align-items: center;
`
const InfoDivider = styled.div`
border:1px solid #00000010;
background-color: #00000010;
opacity: 0.40;
height: 1px;
width: 90%;
margin-top: 35px;
`

const PokeInfo = styled.p`
  width: 100%;
  margin-top: 10.11px;
  text-align: center;
  color: #263238;
  font-size: 16px;
`

interface PokeProps {
  name: string;
  url: string;
  onOpenModal: (value: boolean) => void;
  getUrlShowModalPoke: (value: string) => void;
}

const PokeCard = ({name, url, onOpenModal, getUrlShowModalPoke}: PokeProps) => {

  const image = useGetPoke(url)

   return (
     <Card>
         <InfoArea onClick={() => getUrlShowModalPoke(url)}>
           <ImgContainer><img src={image?.sprites.front_default ?? hand } alt="Hand" /></ImgContainer>
           <InfoDivider />
           <PokeInfo>{name.toLocaleUpperCase()}</PokeInfo>
         </InfoArea>
        <ActionsCard>
          <DeleteButton onClick={() => onOpenModal(true)}>
            <img src={trash} alt="" />
            Excluir
          </DeleteButton>
          <Divider />
          <EditButton onClick={() => onOpenModal(true)}>
            <img src={edit} alt="" />
            Editar
          </EditButton>
        </ActionsCard>
     </Card>
   )
}

export default PokeCard