import styled from 'styled-components';
import ScheduleMapLoader from '../../component/ScheduleMap';

export default function TravelMap() {
  return (
    <TravelContainer>
      <TravelTitleContainer>
        <TravelTitle>국내 다양한 여행지를 둘러보세요.</TravelTitle>
      </TravelTitleContainer>
      <Map>
        <ScheduleMapLoader onPlacesSelected={() => {}} />
      </Map>
      <TravelCarouselContainer></TravelCarouselContainer>
    </TravelContainer>
  );
}

const TravelContainer = styled.div`
  width: 80%;
  margin: 65px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TravelTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const TravelTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const Map = styled.div`
  width: 100%;
`;

const TravelCarouselContainer = styled.div``;