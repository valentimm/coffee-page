import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { Container } from "./styles"

import bannerFinish from "../../assets/finishImage.svg"

export function Success () {
  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
      <div id="main">
        <div id="infoCompiled">
          <span>
            <div id="pin">
              <MapPin size={16} weight="fill" color="white" />
            </div>
            <a>Entrega em</a>
            <strong>Rua ildefonso stockler de frança, 000</strong>
          </span>
          <span>
          <div id="timer">
            <Timer size={16} weight="fill" color="white" />
          </div>
          <a>Previsão de entrega</a>
          <strong>20 min - 30 min</strong>
          </span>
          <span>
            <div id="cash">
              <CurrencyDollar size={16} weight="fill" color="white" />
            </div>
            <a>Pagamento na entrega</a>
            <strong>Cartão de crédito</strong>
          </span>
        </div>
        <div id="banner">
          <img src={bannerFinish} />
        </div>
      </div>
    </Container>
  )
}