import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as discordicon } from '../TechStack/Discord.svg';
import { ReactComponent as Githubicon } from '../TechStack/github.svg';
import { ReactComponent as Htmlicon } from '../TechStack/html.svg';
import { ReactComponent as Jiraicon } from '../TechStack/Jira.svg';
import { ReactComponent as Reactincon } from '../TechStack/react.svg';
import { ReactComponent as Readmineicon } from '../TechStack/Readmine.svg';
import { ReactComponent as Reduxicon } from '../TechStack/Redux.svg';
import { ReactComponent as Tsicon } from '../TechStack/ts.svg';
import { ReactComponent as Vscodeaicon } from '../TechStack/VSCode.svg';
import { ReactComponent as Cssicon } from '../TechStack/css.svg';
import { ReactComponent as Giticon } from '../TechStack/git.svg';
import { ReactComponent as Firebaseicon } from '../TechStack/firebase.svg';
import { ReactComponent as bitbucketicon } from '../TechStack/bitbucket.svg';
import { ReactComponent as jsicon } from '../TechStack/js.svg';

export const TechStack = () => {
  return (
    <div className="dashboard">
      {' '}
      <div className="dashboard-tech-stack-container">
        {' '}
        <Link to=".." relative="path">
          {' '}
          {'< TECHSTACK'}{' '}
        </Link>{' '}
        <p>
          {' '}
          Poniżej znajdziesz tech stack oraz narzędzia, jakich nauczyłem się
          podczas kursu{' '}
        </p>{' '}
        <div className="dashboard-tech-stack-flex">
          {' '}
          <div className="dashboard-tech-stack-grid">
            {' '}
            <div className="dashboard-tech-stack-element">
              <img src={Cssicon} alt="css" /> <p>CSS</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={Htmlicon} alt="html" /> <p>HTML</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={Tsicon} alt="typescript" /> <p>Type Script</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={jsicon} alt="javascript" /> <p>Java Script</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={Reactincon} alt="react" /> <p>React</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={Githubicon} alt="github" /> <p>GitHub</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={Firebaseicon} alt="firebase" /> <p>Firebase</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={Jiraicon} alt="jira" /> <p>Jira</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={bitbucketicon} alt="bitbucket" /> <p>ButBucket</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={Reduxicon} alt="redux" /> <p>Redux</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={discordicon} alt="discord" /> <p>Discord</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={Vscodeaicon} alt="VSC" /> <p>VS Code</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={Readmineicon} alt="redmine" /> <p>Redmine</p>
            </div>
            <div className="dashboard-tech-stack-element">
              <img src={Giticon} alt="git" /> <p>Git</p>
            </div>
          </div>
        </div>{' '}
      </div>{' '}
    </div>
  );
};
