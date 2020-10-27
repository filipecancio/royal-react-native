import React from 'react';
import GoHomeButton from '../GoHomeButton';
import GraphLine from '../GraphLine';
import GraphPie from '../GraphPie';
import LegendBar from '../LegendBar';
import { Container,Title,Subtitle,Title2,SuperiorArea,ContentArea } from './styles';

export interface Props {
    handlePage:any,
    graphValues:any
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
                    <Title2>Total de transações</Title2>
                    <GraphPie debit={props.graphValues.debit} credit={props.graphValues.credit} />
                    <Title2>Total de transferências no mês</Title2>
                    <GraphLine totais={props.graphValues.totalsDebit}/>
                    <Title2>Total de recebimentos no mês</Title2>
                    <GraphLine totais={props.graphValues.totalsCredit}/>
                    <LegendBar legends={props.graphValues.nick}/>
                </Container> 
        </>
      );
    }

export default GraphArea;