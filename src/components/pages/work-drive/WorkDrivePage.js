import React, { useState, useMemo, useCallback } from "react";
import workDriveIcon from "../../../assets/images/workDrive.png"
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import "./work-drive-page.scss";
import WorkDriveDetailsBar from './WorkDriveDetailsBar';
import WorkDriveContent from './WorkDriveContent'
import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
import { useSelector, useDispatch } from "react-redux";
import DemoFsMap from './demoApi.json';
import {
  ChonkyActions,
  ChonkyFileActionData,
  defineFileAction,
  FileArray,
  FileBrowser,
  FileContextMenu,
  ChonkyIconName,
  FileData,
  FileHelper,
  FileList,
  FileNavbar,
  FileToolbar,
} from 'chonky';




const rootFolderId = DemoFsMap.rootFolderId;
const fileMap = DemoFsMap.fileMap;



export const useFiles = (currentFolderId) => {
  return useMemo(() => {
      const currentFolder = fileMap[currentFolderId];
      const files = currentFolder.childrenIds
          ? currentFolder.childrenIds.map((fileId) => fileMap[fileId] ?? null)
          : [];
      return files;
  }, [currentFolderId]);
};

export const useFolderChain = (currentFolderId) => {
  return useMemo(() => {
      const currentFolder = fileMap[currentFolderId];

      const folderChain = [currentFolder];

      let parentId = currentFolder.parentId;
      while (parentId) {
          const parentFile = fileMap[parentId];
          if (parentFile) {
              folderChain.unshift(parentFile);
              parentId = parentFile.parentId;
          } else {
              parentId = null;
          }
      }

      return folderChain;
  }, [currentFolderId]);
};

// export const useFileActionHandler = (setCurrentFolderId) => {
//   return useCallback((data) => {    
//       if (data.id === ChonkyActions.OpenFiles.id) {
//           const { targetFile, files } = data.payload;
//           const fileToOpen = targetFile ?? files[0];
//           if (fileToOpen && FileHelper.isDirectory(fileToOpen)) {
//               setCurrentFolderId(fileToOpen.id);
//               return;
//           }
//       }

//       if (data.id === ChonkyActions.EnableGridView.id) {
//         setListViewActive(false)
//       }

//       if (data.id === ChonkyActions.EnableListView.id) {
//         setListViewActive(true)
//       }

//       // showActionNotification(data);
//   }, [setCurrentFolderId]);
// };





const WorkDrivePage = () => {
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);
  const [listViewActive, setListViewActive,] = useState(false);



  setChonkyDefaults({
    iconComponent: ChonkyIconFA,
    // disableSelection: true,
    disableDragAndDropProvider: true,
  });

  const useFileActionHandler = (setCurrentFolderId) => {
    return useCallback((data) => {    
        if (data.id === ChonkyActions.OpenFiles.id) {
            const { targetFile, files } = data.payload;
            const fileToOpen = targetFile ?? files[0];
            if (fileToOpen && FileHelper.isDirectory(fileToOpen)) {
                setCurrentFolderId(fileToOpen.id);
                return;
            }
        }
  
        if (data.id === ChonkyActions.EnableGridView.id) {
          setListViewActive(false)
        }
  
        if (data.id === ChonkyActions.EnableListView.id) {
          setListViewActive(true)
        }
  
        // showActionNotification(data);
    }, [setCurrentFolderId]);
  };


    // chonky configs
    const [currentFolderId, setCurrentFolderId] = useState(rootFolderId);
    const files = useFiles(currentFolderId);
    const folderChain = useFolderChain(currentFolderId);
    const handleFileAction = useFileActionHandler(setCurrentFolderId);



    const ExtraActions = {
      CreateFolder: defineFileAction({
        id: 'create_folder',
        button: {
            name: 'Create folder',
            toolbar: true,
            contextMenu: true,
            group: 'Actions',
            tooltip: 'Create folder',
            icon: ChonkyIconName.folderCreate,
        },  
      })
    }
    
    const myFileActions = [
      // myCustomAction,
      // ChonkyActions.ClearSelection,
      // ChonkyActions.UploadFiles,
      ChonkyActions.DownloadFiles,
      ChonkyActions.DeleteFiles,
      ExtraActions.CreateFolder,
    ];

    const actionsToDisable = [
      // ChonkyActions.EnableListView.id,
      // ChonkyActions.SelectAllFiles.id,
      ChonkyActions.ToggleHiddenFiles.id
    ];


  return (
    <div className="page-container">
      <FileBrowser files={files} folderChain={folderChain}
        // doubleClickDelay={300}
        // disableSelection={true}
        // disableDefaultFileActions={true}
        // onFileAction={() => alert('hi')}
        disableDefaultFileActions={actionsToDisable}
        defaultFileViewActionId={ChonkyActions.EnableGridView.id}
        fileActions={myFileActions}
        onFileAction={handleFileAction}
      > 
        <div className="cloud-page work-drive-cloud-page">
          <div className="cloud-page__header">

          <div className='grid-content'>
            <div className='grid-content_left cloud-page__header_share'>
              <div className='cloud-page__header_share_icon'>
                <img src={workDriveIcon} />
              </div>

              <div className="cloud-page__header_share_title">
                {t("WORK_DRIVE_PAGE.TITLE")}
              </div>
            </div>

            <div className='grid-content_right'>
              <div className='cloud-page__header_work-drive-page-details'>
                <WorkDriveDetailsBar/>
              </div>
            </div>
          </div>

        </div>

      <div className="cloud-page__content">

          <WorkDriveContent listViewActive={listViewActive} />

      </div>
    </div>
      </FileBrowser>
    </div>
  );
};

export default WorkDrivePage;


