import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question:
        "Garsonun yazdığı adisyonda, karşısında iki çarpı işareti olan üründen kaç adet sipariş etmişsinizdir?",
      answers: [
        {
          text: "2",
          correct: false,
        },
        {
          text: "4",
          correct: true,
        },
        {
          text: "6",
          correct: false,
        },
        {
          text: "8",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "'Bana koltuk çıkmanı beklerdim' diyen biri muhatabına hangi mesajı vermiş olur?",
      answers: [
        {
          text: "Beni desteklemeliydin",
          correct: true,
        },
        {
          text: "Taşınmama yardım etmeliydin",
          correct: false,
        },
        {
          text: "Balkonu odaya katmalıydın",
          correct: false,
        },
        {
          text: " Koltuk takımını yenilemeliydin",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question:
        "'Külkedisi' adlı masalın en bilinen versiyonunda, katıldığı baloyu gece yarısı olmadan önce hızlıca terk etmeye çalışan Külkedisi'nin başına ne gelir?",
      answers: [
        {
          text: "Ceketinin dikişleri sökülür",
          correct: false,
        },
        {
          text: "Telefonunun ekranı kırılır",
          correct: false,
        },
        {
          text: "Çantasını kaptırır",
          correct: false,
        },
        {
          text: "Ayakkabısını düşürür",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question:
        "'Okullarda belli bir başarı düzeyinin üzerine çıkan öğrenciye karnesiyle birlikte verilen belgenin doğru yazılışı hangisidir?",
      answers: [
        {
          text: "Takrir belgesi",
          correct: false,
        },
        {
          text: "Tahkir belgesi",
          correct: false,
        },
        {
          text: " Taktir belgesi",
          correct: false,
        },
        {
          text: "Takdir belgesi",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "'Tarla sürmeye gitmek'  anlamına gelen ifade hangisidir? ",
      answers: [
        {
          text: "Fırfır yapmak",
          correct: false,
        },
        {
          text: "Pike çekmek",
          correct: false,
        },
        {
          text: "Mars etmek",
          correct: false,
        },
        {
          text: "Çifte gitmek",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question:
        "'Dünyayı 384 bin kilometre uzaktaki bir uydudan seyretme fırsatı bulmuş biri o, düşünsene!' diyen biri muhtemelen kimden bahsediyordur?",
      answers: [
        {
          text: "Neil Armstrong",
          correct: true,
        },
        {
          text: "Mustafa Topaloğlus",
          correct: false,
        },
        {
          text: "Louis Armstrong",
          correct: false,
        },
        {
          text: "Lance Armstrong",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question:
        "İstanbul'un Kadıköy, Üsküdar, Ümraniye, Beykoz, Maltepe, Kartal, Pendik, Tuzla ilçelerinde oturanlar hangisinde yaşıyordur? ",
      answers: [
        {
          text: "Gelibolu Yarımadası",
          correct: false,
        },
        {
          text: "Çatalca Yarımadası",
          correct: false,
        },
        {
          text: "Kocaeli Yarımadası",
          correct: true,
        },
        {
          text: "Kapıdağ Yarımadası",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        "Geçtiğimiz günlerde görevinden istifa eden Birleşik Krallık başbakanı Liz Truss kaç günlük görev süresiyle Birleşik Krallık'ın en kısa süre görev yapan başbakanı olmuştur? ",
      answers: [
        {
          text: "50",
          correct: true,
        },
        {
          text: "25",
          correct: false,
        },
        {
          text: "33",
          correct: false,
        },
        {
          text: "40",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question:
        "1930'dan beri düzenlenen FIFA Dünya Kupası turnuvalarının hepsine katılmış tek ülke hangisidir?",
      answers: [
        {
          text: "Arjantin",
          correct: false,
        },
        {
          text: "Fransa",
          correct: false,
        },
        {
          text: "Portekiz",
          correct: false,
        },
        {
          text: "Brezilya",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Türkçe yazım kurallarına göre hangisinin yazılışı doğrudur?",
      answers: [
        {
          text: "13:00'te",
          correct: true,
        },
        {
          text: "13.00'da",
          correct: false,
        },
        {
          text: "13.00'te",
          correct: false,
        },
        {
          text: "13.00'da",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        "Milli Savunma Bakanlığı'nın resmi sitesinde yer alan Atatürk'e ait özlük bilgilerine göre, Atatürk'ün boyu, kilosu ve ayakkabı numarası sırasıyla nasıldır?",
      answers: [
        {
          text: "170 cm, 68-70 kg, 40 numara",
          correct: false,
        },
        {
          text: "172 cm, 71-73 kg, 41 numara",
          correct: false,
        },
        {
          text: "174 cm, 74-76 kg, 42 numara",
          correct: true,
        },
        {
          text: " 176 cm, 77-79 kg, 43 numara",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "Hangisi 'Dede Korkut Hikayeleri'ndeki karakterlerden biri değildir?",
      answers: [
        {
          text: "Bayındır Han",
          correct: false,
        },
        {
          text: "Bala Hatun",
          correct: true,
        },
        {
          text: "Bamsı Beyrek",
          correct: false,
        },
        {
          text: "Banu Çiçek",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "Hangisi 1991'de İngiltere milli futbol takımında beş defa forma giymiş bir futbolcunun soyadıdır?",
      answers: [
        {
          text: "Maho",
          correct: false,
        },
        {
          text: "Feyzo",
          correct: false,
        },
        {
          text: "Davaro",
          correct: false,
        },
        {
          text: "Salako",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question:
        "'Geçti Bor'un pazarı' atasözünde adı geçen Bor, hangi ilin bir ilçesidir?",
      answers: [
        {
          text: "Niğde",
          correct: true,
        },
        {
          text: "Aksaray",
          correct: false,
        },
        {
          text: "Kırşehir",
          correct: false,
        },
        {
          text: "Nevşehir",
          correct: false,
        },
        
      ],
    },
    {
      id: 15,
      question:
        "Ed Sheeran, çocukken yaşadığı kekemelik sorununu yenmesinde kimin bir albümündeki şarkıları dinleyip tüm sözlerini öğrenmesinin büyük faydası olduğunu söylemiştir?",
      answers: [
        {
          text: "Sagopa kajmer",
          correct: false,
        },
        {
          text: "Snoop Dogg",
          correct: false,
        },
        {
          text: "50 Cent",
          correct: false,
        },
        {
          text: "Eminem",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
