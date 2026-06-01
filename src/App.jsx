// 

import { useState } from "react";

// PAGES
import Home from "./pages/Home";
import ChooseFriend from "./pages/ChooseFriend";
import SelectClass from "./pages/SelectClass";
import FirstStdChapters from "./pages/FirstStdChapters";
import SecondStdChapters from "./pages/SecondStdChapters";
import HolidayFun from "./pages/HolidayZone";

// FIRST STD (MAIN TOPICS)
import Alphabets from "./pages/firstdiv/Alphabets";
import Numbers from "./pages/firstdiv/Numbers";
import Colors from "./pages/firstdiv/Colors";
import Fruits from "./pages/firstdiv/Fruits";
import Vegetables from "./pages/firstdiv/Vegetables";
import Animals from "./pages/firstdiv/Animals";
import Birds from "./pages/firstdiv/Birds";
import BodyParts from "./pages/firstdiv/BodyParts";
import Familymembers from "./pages/firstdiv/Familymembers";

// HOLY (SELF LEARNING MODULE)
import SelfLearning from "./pages/holy/SelfLearning";
import Fun from "./pages/holy/Fun";
import Alphabet from "./pages/holy/Alphabet";
import Number from "./pages/holy/Numbers";
import Color from "./pages/holy/Colors";
import Animal from "./pages/holy/Animals";




import Pronouns from "./pages/secstd/Pronouns";
import DailySentences from "./pages/secstd/DailySentences";
import SchoolThings from "./pages/secstd/SchoolThings";
import FamilyFriends from "./pages/secstd/FamilyFriends";

import AnimalsActions from "./pages/secstd/AnimalsActions";

import MyDay from "./pages/secstd/MyDaily";
import Opposites from "./pages/secstd/Opposites";
import Stories from "./pages/secstd/Stories";

import ReadingPractices from "./pages/secstd/ReadingPractices";
import WritingPractices from "./pages/secstd/WritingPractices";

import Quiz from "./pages/secstd/Quiz";




function App() {
  const [page, setPage] = useState("home");
  const [selectedFriend, setSelectedFriend] = useState("");

  const openFriendPage = () => setPage("friend");

  const handleFriendSelect = (friend) => {
    setSelectedFriend(friend);
    setPage("class");
  };

  return (
    <>
      {/* ================= HOME FLOW ================= */}
      {page === "home" && (
        <Home goToFriend={openFriendPage} />
      )}

      {page === "friend" && (
        <ChooseFriend
          goBack={() => setPage("home")}
          goNext={handleFriendSelect}
        />
      )}

      {page === "class" && (
        <SelectClass
          goBack={() => setPage("friend")}
          goToFirstStd={() => setPage("firstStd")}
goToSecondStd={() => setPage("secondStd")}
          goToHoliday={() => setPage("holiday")}
        />
      )}
{page === "holiday" && (
  <HolidayFun
    goBack={() => setPage("class")}
    goToSelfLearning={() => setPage("selflearning")}
    goToFun={() => setPage("fun")}
  />
)}
      {/* ================= STD FLOWS ================= */}
      {page === "firstStd" && (
        <FirstStdChapters
          goBack={() => setPage("class")}
          setPage={setPage}
        />
      )}

{page === "secondStd" && (
  <SecondStdChapters
    goBack={() => setPage("class")}
    openPage={setPage}
  />
)}
      {page === "holiday" && (
        <HolidayFun
          goBack={() => setPage("class")}
        />
      )}

      {/* ================= FIRSTDIV TOPICS ================= */}
      {page === "alphabets" && (
        <Alphabets goBack={() => setPage("firstStd")} />
      )}

      {page === "numbers" && (
        <Numbers goBack={() => setPage("firstStd")} />
      )}

      {page === "colors" && (
        <Colors goBack={() => setPage("firstStd")} />
      )}

      {page === "fruits" && (
        <Fruits goBack={() => setPage("firstStd")} />
      )}

      {page === "vegetables" && (
        <Vegetables goBack={() => setPage("firstStd")} />
      )}

      {page === "animals" && (
        <Animals goBack={() => setPage("firstStd")} />
      )}

      {page === "birds" && (
        <Birds goBack={() => setPage("firstStd")} />
      )}

      {page === "bodyparts" && (
        <BodyParts goBack={() => setPage("firstStd")} />
      )}

      {page === "familymembers" && (
        <Familymembers goBack={() => setPage("firstStd")} />
      )}

      {/* ================= SELF LEARNING ================= */}
      {page === "selflearning" && (
        <SelfLearning
          goBack={() => setPage("holiday")}
          goToAlphabet={() => setPage("alphabet")}
          goToNumber={() => setPage("number")}
          goToColor={() => setPage("color")}
          goToAnimal={() => setPage("animal")}
          goToFun={() => setPage("fun")}
        />
      )}

      {page === "alphabet" && (
        <Alphabet goBack={() => setPage("selflearning")} />
      )}

      {page === "number" && (
        <Number goBack={() => setPage("selflearning")} />
      )}

      {page === "color" && (
        <Color goBack={() => setPage("selflearning")} />
      )}

      {page === "animal" && (
        <Animal goBack={() => setPage("selflearning")} />
      )}






      {page === "pronouns" && (
        <Pronouns goBack={() => setPage("secondStd")} />
      )}

      {page === "dailysentences" && (
        <DailySentences goBack={() => setPage("secondStd")} />
      )}

      {page === "schoolthings" && (
        <SchoolThings goBack={() => setPage("secondStd")} />
      )}

      {page === "familyfriends" && (
        <FamilyFriends goBack={() => setPage("secondStd")} />
      )}

      {page === "animalsactions" && (
        <AnimalsActions goBack={() => setPage("secondStd")} />
      )}

      {page === "myday" && (
        <MyDay goBack={() => setPage("secondStd")} />
      )}

      {page === "opposites" && (
        <Opposites goBack={() => setPage("secondStd")} />
      )}

      {page === "stories" && (
        <Stories goBack={() => setPage("secondStd")} />
      )}

      {page === "reading" && (
        <ReadingPractices goBack={() => setPage("secondStd")} />
      )}

      {page === "writing" && (
        <WritingPractices goBack={() => setPage("secondStd")} />
      )}

      {/* ⭐ FIXED: HOLIDAY ACTIVITIES PAGE */}
      {page === "holidayactivities" && (
        <HolidayActivities goBack={() => setPage("secondStd")} />
      )}

      {page === "quiz" && (
        <Quiz goBack={() => setPage("secondStd")} />
      )}




      {page === "fun" && (
        <Fun goBack={() => setPage("selflearning")} />
      )}
    </>
  );
}

export default App;