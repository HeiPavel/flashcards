import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import ROUTES from "./routes";

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.topicsRoute()} className="active">
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.quizzesRoute()} className="active">
              Quizzes
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.newQuizRoute()} className="active">
              New Quiz
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="topics/*" element={<TopicsRoutes />}>
        </Route>
        <Route path="quizzes/*" element={<QuizRoutes />}>
        </Route>
      </Routes>
    </Router>
  );
}

function TopicsRoutes() {

  return (
  <>
    <Routes>
      <Route path="new" element={<NewTopicForm />}>
      </Route>
      <Route path=":topicId" element={<Topic />}>
      </Route>
      <Route index element={<Topics />}>
      </Route>
    </Routes>
  </>
  );
}

function QuizRoutes() {

  return (
    <>
      <Routes>
        <Route path="new" element={<NewQuizForm />}>
        </Route>
        <Route path=":quizId" element={<Quiz />}>
        </Route>
        <Route index element={<Quizzes />}>
        </Route>
      </Routes>
    </>
  );
}