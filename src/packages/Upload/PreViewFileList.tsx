import React, { FC } from "react";
import { PreviewFileListProps } from ".";
import Icon from "../Icon";
import ProgressBar from "../ProgressBar";

const PreViewFileList: FC<PreviewFileListProps> = (props) => {

  const { fileList, onRemove } = props

  return (
    <ul className="upload-list">
      {fileList.map(item => {
        return (
          <li className="upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon icon="file-alt" theme="secondary" />
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === 'uploading' || item.status === 'ready') && <Icon icon="spinner" spin theme="primary" />}
              {item.status === 'success' && <Icon icon="check-circle" theme="success" />}
              {item.status === 'error' && <Icon icon="times-circle" theme="danger" />}
            </span>
            <span className="file-actions">
              <Icon icon="times" onClick={() => onRemove(item)} />
            </span>
            { item.status === 'uploading' &&  <ProgressBar percent={item.percent} /> }
          </li>
        )
      })}
    </ul>
  )
}

export default PreViewFileList