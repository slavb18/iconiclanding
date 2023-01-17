import * as React from "react";
import "./App.css";
import polygon13 from "./assets/polygon13.svg";
import ellipse32 from "./assets/ellipse32.svg";
import group12 from "./assets/group12.svg";
import frame from "./assets/frame.svg";
import frame2 from "./assets/frame2.svg";
import polygon14 from "./assets/polygon14.svg";
import group2 from "./assets/group2.svg";
import frame1 from "./assets/frame1.svg";
import polygon7 from "./assets/polygon7.svg";
import num41 from "./assets/num41.png";
import polygon11 from "./assets/polygon11.svg";
import group1 from "./assets/group1.svg";
import Logo from "./components/Logo";
import Button from "./components/Button";
const App = () => {
  const propsData = {
    logo: {
      kvkuvbniuzvjg: "B",
      brooklyn: "Iconic",
    },
    button: {
      button: "Регистрация",
    },
    button1: {
      button: "Вход",
    },
  };
  return (
    <div className="obgxwpvrwixie">
      <div className="header">
        <div className="frame-41">
          <Logo className="logo-instance-1" {...propsData.logo} />
          <span className="bieokgfgzrlfu">Платформа</span>
          <span className="kwhtxlsyopedc">Контакты</span>
          <div className="flex-container">
            <Button className="button-instance-1" {...propsData.button} />
            <Button className="button-1-instance" {...propsData.button1} />
          </div>
        </div>
      </div>
      <div className="vsfaywucsoakj">
        <div className="flex-container-1">
          <div className="flex-container-2">
            <img className="polygon-13" src={polygon13} />
            <img className="polygon-14" src={polygon14} />
          </div>
          <div className="flex-container-3">
            <span className="wtugglhwmthhn">
              ЯКомпания Мы по себе знаем, насколько трудно начать свое дело,
              выйти из зоны комфорта и начать работать на себя. Теперь мы
              помогаем открыть свой бизнес Вам.
            </span>
            <img className="group-1" src={group1} />
          </div>
          <img className="polygon-11" src={polygon11} />
        </div>
        <div className="itcypxysonvsz">
          <img className="polygon-7" src={polygon7} />
          <div className="flex-container-4">
            <span className="obghzmlthejlu">
              Маркетплейс команд разработчиков{" "}
            </span>
            <span className="rm">
              СRM-система команд самозанятых: безопасные платежи и удобный
              документооборот Подробнее...
            </span>
          </div>
          <div className="flex-container-5">
            <span className="kvhaecazxrdzt">Сервис безопасных расчетов</span>
            <span className="goclqvzjjopyw">
              Выгодные расчеты через номинальный счет для маркетплейсов и
              онлайн-платформ, зарабатывающих на комиссии Подробнее...
            </span>
          </div>
        </div>
        <div className="flex-container-6">
          <div className="rectangle-83">
            <span className="kgnjvpttuxcou">Контакты</span>
          </div>
          <div className="rectangle-74">
            <div className="flex-container-7">
              <span className="uvtoirvyvlucc">Связаться с нами</span>
              <span className="qydpxatpintzu">
                Есть вопросы? Свяжитесь с нами!
              </span>
              <input className="rectangle-70" placeholder="Имя" type="text" />
              <input className="rectangle-71" placeholder="Email" type="text" />
              <input className="rectangle-75" placeholder="Номер" type="text" />
              <input
                className="rectangle-73"
                placeholder="Сообщение..."
                type="text"
              />
              <button className="rectangle-72">
                <span className="mzxpzrpcgbczu">Отправить</span>
              </button>
            </div>
            <div className="flex-container-8">
              <img className="group-2" src={group2} />
              <img className="frame" src={frame} />
              <div className="flex-container-9">
                <img className="frame-1" src={frame1} />
                <span>+7 904 315 72 77</span>
              </div>
              <div className="flex-container-10">
                <img className="frame-2" src={frame2} />
                <span>sales@iconicompany.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-container-11">
          <div className="footer-8">
            <img className="num-4-1" src={num41} />
            <div className="flex-container-12">
              <span className="xelsgrczrleaj">Платформа</span>
              <span>Маркетплейс</span>
              <span>Сервис безопасных расчетов</span>
            </div>
            <div className="flex-container-13">
              <span className="kfnziawtvuejj">Компания</span>
              <span className="wdrdbunynlvkk">Стажерка</span>
            </div>
          </div>
          <img className="ellipse-32" src={ellipse32} />
        </div>
        <div className="rectangle-105">
          <span className="num-2022">
            © 2022 Все права защищены. ООО «ЯкомпаниЯ»
          </span>
          <div className="flex-container-14">
            <div className="flex-container-15">
              <img className="group-12" src={group12} />
              <span className="salesiconicompanycom">
                sales@iconicompany.com
              </span>
              <span className="num-7-904-315-72-77">+7 904 315 72 77</span>
            </div>
            <div className="flex-container-16">
              <span className="mctdqurqzmogx">Пользовательское соглашение</span>
              <span>Политика конфиденциальности</span>
            </div>
          </div>
        </div>
      </div>
      <span className="platforms-and-cloud">Platforms and cloud solutions</span>
    </div>
  );
};
export default App;
