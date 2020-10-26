import React from 'react';
import GoHomeButton from '../GoHomeButton';
import GraphLine from '../GraphLine';
import GraphPie from '../GraphPie';
import LegendBar from '../LegendBar';
import { Container,Title,Subtitle,Title2,SuperiorArea,ContentArea } from './styles';

export interface Props {
    handlePage:any,
    currentId:number
}

const GraphArea: React.FC<Props> = (props) => {
      return (
        <>
                <Container>
                    <SuperiorArea>
                      <GoHomeButton handlePage={props.handlePage} />
                      <ContentArea>
                        <Title>Transferências Recentes</Title>
                        <Subtitle>outubro/2020</Subtitle>
                      </ContentArea>
                    </SuperiorArea>
                    <Title2>{props.currentId}</Title2>
                    
                    <Title2>Total de transações</Title2>
                    <GraphPie percentage={34.45} />
                    <Title2>Total de transferências no mês</Title2>
                    <GraphLine totais={[78,46,14]}/>
                    <Title2>Total de recebimentos no mês</Title2>
                    <GraphLine totais={[85,56,24]}/>
                    <LegendBar legends={['Rafaela','Ariadne','Gleisson']}/>
                </Container> 
        </>
      );
    }

export default GraphArea;