import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onNewTransactionModalOpen: () => void;
}

export function Header({ onNewTransactionModalOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button
          type="button"
          onClick={onNewTransactionModalOpen}
          data-cy="new-transaction"
        >
          Nova transação
        </button>
      </Content>
    </Container>
  )
}