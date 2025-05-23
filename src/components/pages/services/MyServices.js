import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BankBlock from "./components/bank/BankBlock";
import CalendarBlock from "./components/calendar/CalendarBlock";
import CloudHostingBlock from "./components/cloudHosting/CloudHostingBlock";
import DiscBlock from "./components/disc/DiscBlock";
import DomainsBlock from "./components/domains/DomainsBlock";
import NotesBlock from "./components/notes/NotesBlock";
import GuideBlock from "./components/guide/GuideBlock";
import Services from "./components/services/ServicesBlock";
import WorkDriveBlock from "./components/workDrive/WorkDriveBlock";
import TodosBlock from "./components/todos/TodosBlock";
import SiteCopyingBlock from "./components/site-copying/SiteCopyingBlock";
import WebsiteBuilderBlock from "./components/websiteBuilder/WebsiteBuilderBlock";
import TasksBlock from "./components/tasks/TasksBlock";
import VideoConferencingBlock from "./components/videoConferencing/VideoConferencingBlock";
import AccountingBlock from "./components/accounting/AccountingBlock";
import { Responsive, WidthProvider } from "react-grid-layout";
import { GetScreenSize } from "../../common/getScreenSize/GetScreenSize";
import LogoBuilder from "./components/logoBuilder/LogoBuilder";
import AIEngine from "./components/aiEngine/AIEngine";
import EmailsBlock from "./components/emails/EmailsBlock";
import { useSelector, useDispatch } from "react-redux";

// import './services.scss';
// import { Link } from "react-router-dom";

// This component is for loading components in homepage

const MyServices = () => {
  const screenSize = GetScreenSize();
  const { t } = useTranslation();
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const appsModal = useSelector((state) => state.appsModal.openAppsModal);


  // default layout for all screens
  const layoutXXL = [
    { i: "calendar", x: 0, y: 0, w: 3, h: 1 },
    { i: "notes", x: 3, y: 0, w: 3, h: 1 },
    { i: "tasks", x: 6, y: 0, w: 6, h: 1 },

    { i: "todos", x: 0, y: 1, w: 6, h: 1 },
    { i: "drive", x: 6, y: 1, w: 6, h: 1 },

    { i: "emails", x: 0, y: 2, w: 6, h: 1 },
    { i: "videoConference", x: 6, y: 2, w: 6, h: 1 },
    // { i: "logo-builder", x: 9, y: 1, w: 6, h: 1 },

    { i: "accounting", x: 0, y: 3, w: 6, h: 1 },
  ];

  const layoutXL = [
    { i: "calendar", x: 0, y: 0, w: 3, h: 1 },
    { i: "notes", x: 3, y: 0, w: 3, h: 1 },
    { i: "tasks", x: 6, y: 0, w: 6, h: 1 },

    { i: "todos", x: 0, y: 1, w: 6, h: 1 },
    { i: "drive", x: 6, y: 1, w: 6, h: 1 },

    { i: "emails", x: 0, y: 2, w: 6, h: 1 },
    { i: "videoConference", x: 6, y: 2, w: 6, h: 1 },
    { i: "accounting", x: 0, y: 3, w: 6, h: 1 },
  ];

  const layoutLG = [
    { i: "calendar", x: 0, y: 0, w: 4, h: 1 },
    { i: "tasks", x: 4, y: 0, w: 8, h: 1 },

    { i: "todos", x: 0, y: 1, w: 8, h: 1 },
    { i: "notes", x: 8, y: 1, w: 4, h: 1 },

    { i: "drive", x: 0, y: 2, w: 8, h: 1 },

    { i: "emails", x: 0, y: 3, w: 8, h: 1 },
    { i: "videoConference", x: 0, y: 4, w: 8, h: 1 },

    { i: "accounting", x: 0, y: 5, w: 8, h: 1 },
  ];

  const layoutMD = [
    { i: "calendar", x: 0, y: 0, w: 6, h: 1 },
    { i: "notes", x: 6, y: 0, w: 6, h: 1 },

    { i: "todos", x: 0, y: 1, w: 6, h: 1 },
    { i: "tasks", x: 6, y: 1, w: 6, h: 1 },

    { i: "drive", x: 0, y: 2, w: 6, h: 1 },
    { i: "emails", x: 6, y: 2, w: 6, h: 1 },

    { i: "videoConference", x: 0, y: 3, w: 6, h: 1 },
    { i: "accounting", x: 6, y: 3, w: 6, h: 1 },


  ];

  const layoutSM = [
    { i: "calendar", x: 0, y: 0, w: 12, h: 1 },
    { i: "notes", x: 0, y: 1, w: 12, h: 1 },
    { i: "todos", x: 0, y: 2, w: 12, h: 1 },
    { i: "tasks", x: 0, y: 3, w: 12, h: 1 },
    { i: "drive", x: 0, y: 4, w: 12, h: 1 },
    { i: "emails", x: 0, y: 5, w: 12, h: 1 },
    { i: "videoConference", x: 0, y: 6, w: 12, h: 1 },
    { i: "accounting", x: 0, y: 7, w: 12, h: 1 },
  ];

  const layoutXS = [
    { i: "calendar", x: 0, y: 0, w: 12, h: 1 },
    { i: "notes", x: 0, y: 1, w: 12, h: 1 },
    { i: "todos", x: 0, y: 2, w: 12, h: 1 },
    { i: "tasks", x: 0, y: 3, w: 12, h: 1 },
    { i: "drive", x: 0, y: 4, w: 12, h: 1 },
    { i: "emails", x: 0, y: 5, w: 12, h: 1 },
    { i: "videoConference", x: 0, y: 6, w: 12, h: 1 },
    { i: "accounting", x: 0, y: 7, w: 12, h: 1 },
  ];


  const originalLayouts = 
    // getFromLS("layouts") ||
  {
    lg:
      screenSize === "XXL"
        ? layoutXXL
        : screenSize === "XL"
        ? layoutXL
        : screenSize === "LG"
        ? layoutLG
        : screenSize === "MD"
        ? layoutMD
        : screenSize === "SM"
        ? layoutSM
        : layoutXS,
  };


  const rowHeight = screenSize === "LG" ? 315 : 315;

  const [layouts, setLayouts] = useState(
    JSON.parse(JSON.stringify(originalLayouts))
  );

  // call saveToLS when screen size change
  const onLayoutChange = (layout, layouts) => {
    saveToLS("layouts", layouts);
    // setLayouts(layouts);
  };

  // after loading content, when sizescreen change it will update the layout
  useEffect(() => {
    setLayouts(originalLayouts);
  }, [screenSize]);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = (event) => {
    if (!isCollapsed) {
      const parent = event.target.parentNode.parentNode.parentNode.parentNode;
      parent.style.height = "78px";
      parent.style.overflowY = "hidden";
    } else {
      const parent = event.target.parentNode.parentNode.parentNode.parentNode;
      parent.style.height = "315px";
      parent.style.overflowY = "";
    }

    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container">
      <div className="row">
        <ResponsiveGridLayout
          className={`my-services my-services__layout ${
            screenSize === "XXL"
              // ? "layoutXL"
              ? "layoutXL"
              : screenSize === "XL"
              ? "layoutXL"
              : screenSize === "LG"
              ? "layoutLG"
              : screenSize === "MD"
              ? "layoutMD"
              : screenSize === "SM"
              ? "layoutSM"
              : "layoutXS"
          }
          ${appsModal ? 'backdrop' : ''}
          `}
          layouts={layouts}
          cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
          rowHeight={rowHeight}
          margin={[30, 30]}
          useCSSTransforms={false}
          draggableCancel=".MyNonDraggableAreaClassName"
          draggableHandle=".react-grid-dragHandleArea"
          isResizable={false}
          compactType="horizontal"
          onLayoutChange={onLayoutChange}
        >
          <div key="calendar">
            <CalendarBlock handleCollapse={handleCollapse} />
          </div>

          <div key="notes">
            <NotesBlock handleCollapse={handleCollapse} />
          </div>

          <div key="tasks">
            <TasksBlock handleCollapse={handleCollapse} />
          </div>

          <div key="todos">
            <TodosBlock />
          </div>

          <div key="drive">
            <WorkDriveBlock />
          </div>

          <div key="emails">
            <EmailsBlock />
          </div>

          <div key="videoConference">
            <VideoConferencingBlock />
          </div>

          <div key="accounting">
            <AccountingBlock />
          </div>

        </ResponsiveGridLayout>
      </div>
    </div>
  );

  // getting layouts from localstorag
  function getFromLS(key) {
    let lsXL = {};
    let lsLG = {};
    let lsMD = {};
    let lsSM = {};
    let lsXS = {};
    if (global.localStorage) {
      try {
        if (screenSize === "XL") {
          lsXL = JSON.parse(global.localStorage.getItem("rglXL")) || {};
          return lsXL[key];
        }
        if (screenSize === "LG") {
          lsLG = JSON.parse(global.localStorage.getItem("rglLG")) || {};
          return lsLG[key];
        }
        if (screenSize === "MD") {
          lsMD = JSON.parse(global.localStorage.getItem("rglMD")) || {};
          return lsMD[key];
        }
        if (screenSize === "SM") {
          lsSM = JSON.parse(global.localStorage.getItem("rglSM")) || {};
          return lsSM[key];
        }
        if (screenSize === "XS") {
          lsXS = JSON.parse(global.localStorage.getItem("rglXS")) || {};
          return lsXS[key];
        }
      } catch (e) {
        /*Ignore*/
      }
    }
  }

  // saving layouts to localstorage
  function saveToLS(key, value) {
    if (global.localStorage) {
      if (screenSize === "XL") {
        global.localStorage.setItem(
          "rglXL",
          JSON.stringify({
            [key]: value,
          })
        );
      }

      if (screenSize === "LG") {
        global.localStorage.setItem(
          "rglLG",
          JSON.stringify({
            [key]: value,
          })
        );
      }

      if (screenSize === "MD") {
        global.localStorage.setItem(
          "rglMD",
          JSON.stringify({
            [key]: value,
          })
        );
      }

      if (screenSize === "SM") {
        global.localStorage.setItem(
          "rglSM",
          JSON.stringify({
            [key]: value,
          })
        );
      }

      if (screenSize === "XS") {
        global.localStorage.setItem(
          "rglXS",
          JSON.stringify({
            [key]: value,
          })
        );
      }
    }
  }
};

export default MyServices;

