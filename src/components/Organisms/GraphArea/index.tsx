import React from 'react';
import GoHomeButton from '../../Atoms/GoHomeButton';
import GraphLine from '../../Molecules/GraphLine';
import GraphPie from '../../Molecules/GraphPie';
import SubtitleBar from '../../Molecules/SubtitleBar';
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
                      <GoHomeButton handlePage={props.handlePage} color="#2C8CC2" />
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
                    <SubtitleBar subs={props.graphValues.nick}/>
                </Container> 
        </>
      );
    }

export default GraphArea;