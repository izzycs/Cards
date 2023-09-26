import React from 'react';
import Card from './components/Card';
import CardImage from './components/CardImage';
import CardBody from './components/CardBody';
import CardTitle from './components/CardTitle';
import CardText from './components/CardText';
import Button from './components/Button';
import onepiece from './assets/onepiece.jpeg';
import hunterxhunter from './assets/hunterxhunter.jpeg';
import vinland from './assets/vinland.jpeg';
import deathnote from './assets/deathnote.jpeg';
import dbz from './assets/dbz.jpeg';
import onepunch from './assets/onepunch.jpeg';
import naruto from './assets/naruto.jpeg';
import Tokyo from './assets/Tokyo.jpeg';
import Bleach from './assets/Bleach.jpeg';
import demon from './assets/demon.jpeg';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <header className="headerStyle"> {/* Use className here instead of style */}
        Best Anime
      </header>

      {/* one piece card */}
      <div style={{ padding: '20px' }}>
        <Card>
          <CardImage src={onepiece} />
          <CardBody>
            <CardTitle>One Piece</CardTitle>
            <CardText>ONE PIECE is a legendary high-seas quest unlike any other...</CardText>
            <Button href="https://www.imdb.com/title/tt0388629/">Check It Out</Button>
          </CardBody>
        </Card>
      </div>

      {/* hunter x hunter card */}
      <div style={{ padding: '20px' }}>
        <Card>
          <CardImage src={hunterxhunter} />
          <CardBody>
            <CardTitle>Hunter x Hunter</CardTitle>
            <CardText>
Gon Freecss is a young boy living on Whale Island. He learns from "Hunter" Kite, that his father, who he was told was dead, is still alive somewhere as a top "Hunter," risking his life to seek unknown items, such as hidden treasures, curiosa, exotic living creatures, etc. Gon decides to become a professional Hunter and leaves the island. To become a Hunter, he must pass the Hunter Examination, where he meets and befriends three other applicants: Kurapika, Leorio and Killua. Can Gon pass this formidable hurdle, the Hunter Examination, to become "the Best Hunter in the World" and eventually meet his father?</CardText>
            <Button href="https://www.imdb.com/title/tt2098220/?ref_=fn_al_tt_1">Check It Out</Button>
          </CardBody>
        </Card>
      </div>

      {/* vinland saga */}
      <div style={{ padding: '20px' }}>
        <Card>
          <CardImage src={vinland} />
          <CardBody>
            <CardTitle>Vinland Saga</CardTitle>
            <CardText>A young man named Thorfinn finds himself in a quest for revenge against his father's killer. Firstly indulged in the aparent greatness of war and honor, Thorfinn quickly changes as he endures having to survive alone and then alongside the man he vows to kill, developing conflicting emotions towards the causality of his past and present life.</CardText>
            <Button href="https://www.imdb.com/title/tt10233448/">Check It Out</Button>
          </CardBody>
        </Card>
      </div>
       {/* death note */}
       <div style={{ padding: '20px' }}>
        <Card>
          <CardImage src={deathnote} />
          <CardBody>
            <CardTitle>Death Note</CardTitle>
            <CardText>After an intelligent yet cynical high school student begins to cleanse the world from evil with the help of a magical notebook that can kill anyone whose name is written on it, international authorities call upon a mysterious detective known as "L" to thwart his efforts.</CardText>
            <Button href="https://www.imdb.com/title/tt10233448/">Check It Out</Button>
          </CardBody>
        </Card>
      </div>
      {/* Dragon Ball Z */}
      <div style={{ padding: '20px' }}>
        <Card>
          <CardImage src={dbz} />
          <CardBody>
            <CardTitle>Dragon Ball Z</CardTitle>
            <CardText>Son Goku, the world's most powerful fighter and guardian of justice, must protect the Earth from the Saiyan Warriors working under the tyrannical space warlord Frieza. Against all odds, Goku must team up with his longtime nemesis Piccolo to save everyone he loves from these new, unpredictable threats to humanity.</CardText>
            <Button href="https://www.imdb.com/title/tt0214341/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_dragon%2520ball">Check It Out</Button>
          </CardBody>
        </Card>
      </div>
      {/* One Punch*/}
      <div style={{ padding: '20px' }}>
        <Card>
          <CardImage src={onepunch} />
          <CardBody>
            <CardTitle>One Punch Man</CardTitle>
            <CardText>In a world of superhuman beings, Saitama is a unique hero, he can defeat enemies with a single punch. But being just one hero in a world filled with them, his life is empty and hollow: he gets no respect from anyone, he displays a laidback attitude to everything and for the most part, he finds his overall hero life pointless... and worst of all, he lost his hair due to intense training. These are the adventures of an ordinary yet extraordinary hero.</CardText>
            <Button href="https://www.imdb.com/title/tt4508902/?ref_=fn_al_tt_1">Check It Out</Button>
          </CardBody>
        </Card>
      </div>

      {/*Naruto*/}
      <div style={{ padding: '20px' }}>
        <Card>
          <CardImage src={naruto} />
          <CardBody>
            <CardTitle>Naruto</CardTitle>
            <CardText>It is about a boy named Naruto Uzumaki, with a demon fox sealed within him. He is shunned and hated by both villagers and other ninja, and is labeled a freak and a danger to all around him. He overcomes these challenges through hard work and perseverance, and slowly earns the respect and appreciation of others. He finds friendship and love in those who believed in him when others would not, and together they work as a team to overcome the challenges they face and become true ninjas. It is a story of hope and love, of overcoming impossible odds, and of finding the value and beauty in even the darkest of times.</CardText>
            <Button href="https://www.imdb.com/title/tt0409591/?ref_=fn_al_tt_1">Check It Out</Button>
          </CardBody>
        </Card>
      </div>

      {/*Tokyo Revengers*/}
      <div style={{ padding: '20px' }}>
        <Card>
          <CardImage src={Tokyo} />
          <CardBody>
            <CardTitle>Tokyo Revengers</CardTitle>
            <CardText>Takemichi Hanagaki is a freelancer that's reached the absolute pits of despair in his life. He finds out that the only girlfriend he ever had, in middle school, Hinata Tachibana, had been killed by the ruthless Tokyo Manji Gang. The day after hearing about her death, he's standing on the station platform and ends up being pushed over onto the tracks by a herd of people. He closes his eyes thinking he's about to die, but when he opens his eyes back up, he somehow had gone back in time 12 years. Now that he's back living the best days of his life, Takemichi decides to get revenge on his life.</CardText>
            <Button href="https://www.imdb.com/title/tt13196080/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_tokyo%2520re">Check It Out</Button>
          </CardBody>
        </Card>
      </div>

      {/*Bleach*/}
      <div style={{ padding: '20px' }}>
        <Card>
          <CardImage src={Bleach} />
          <CardBody>
            <CardTitle>Bleach</CardTitle>
            <CardText>High school student Kurosaki Ichigo is unlike any ordinary kid. Why? Because he can see ghosts. Ever since a young age, he's been able to see spirits from the afterlife. Ichigo's life completely changes one day when he and his two sisters are attacked by an evil, hungry and tormented spirit known as a Hollow. Right in the nick of time, Ichigo and his siblings are aided by a Shinigami (Death God) named Kuchiki Rukia, whose responsibility it is to send good spirits (Pluses) to the afterlife known as Soul Society, and to purify Hollows and send them up to Soul Society. But during the fight against the Hollow, Rukia is injured and must transfer her powers to Ichigo. With this newly acquired power, so begins Kurosaki Ichigo's training and duty as a Shinigami to maintain the balance between the world of the living and the world of the dead</CardText>
            <Button href="https://www.imdb.com/title/tt0434665/?ref_=fn_al_tt_1">Check It Out</Button>
          </CardBody>
        </Card>
      </div>

      {/*Demon slayer*/}
      <div style={{ padding: '20px' }}>
        <Card>
          <CardImage src={demon} />
          <CardBody>
            <CardTitle>Demon Slayer</CardTitle>
            <CardText>A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.</CardText>
            <Button href="https://www.imdb.com/title/tt9335498/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_demon%2520slayer">Check It Out</Button>
          </CardBody>
        </Card>
      </div>

    </div>
  );
}

export default App;
