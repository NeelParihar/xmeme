
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import Like from "components/common/Icons/Like";
import Popup from 'reactjs-popup';
import { UpdateMemeForm } from '../MemeForms/UpdateMemeForm';
import axios from "axios";

import { Wrapper, Grid, Item, Content, Stats, Modal } from "./styles";

export const Memes = () => {
  const { theme } = useContext(ThemeContext);
  const { reload, setReload } = useContext(ThemeContext);
  const [memeUpdateData, setMemeUpdateData] = useState(null);
  const [Memes, setMemes] = useState([]);
  const [open, setOpen] = useState(false);
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

  function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  const closeModal = () => {
    setOpen(false)
  };

  useEffect(() => {
    axios
      .get(process.env.BACKEND_URL + 'memes', {
        params: {
          hasCreatedAt: 'true',
        },
      })
      .then((response) => response.data)
      .then((repoData) => {
        setMemes(repoData);
        setReload(false);
        console.log(repoData);
      })
      .catch((error) => console.log(error));
  }, [reload]);
  return (
    <Wrapper as={Container} id="memes">
      {Memes.length > 0 && <h2>Memes uploaded by fellow memers</h2>}
      <Grid>
        {Memes.map((node) => (
          <Item
            key={node.id}
            theme={theme}
          >

            <Card theme={theme}>
              <Content>
                <div className={'datediv'}>
                  {timeSince(new Date(node.createdAt).getTime()) + " ago 🕓"}
                </div>
                <h4>{node.name + ' 😎'}
                </h4>
                <p>{node.caption} </p>

              </Content>

              <img width={"100%"} src={node.url} />
              <Stats theme={theme}>
                <div>
                  <Like memeId={node.id} />
                  <span>{node.likes}</span>

                </div>
                <div className="editMeme-btn" onClick={() => { setMemeUpdateData(node); setOpen(o => !o); }}>
                  <img width={18} height={18} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzgzLjk0NyAzODMuOTQ3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzODMuOTQ3IDM4My45NDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwb2x5Z29uIHBvaW50cz0iMCwzMDMuOTQ3IDAsMzgzLjk0NyA4MCwzODMuOTQ3IDMxNi4wNTMsMTQ3Ljg5MyAyMzYuMDUzLDY3Ljg5MyAJCQkiLz4NCgkJCTxwYXRoIGQ9Ik0zNzcuNzA3LDU2LjA1M0wzMjcuODkzLDYuMjRjLTguMzItOC4zMi0yMS44NjctOC4zMi0zMC4xODcsMGwtMzkuMDQsMzkuMDRsODAsODBsMzkuMDQtMzkuMDQNCgkJCQlDMzg2LjAyNyw3Ny45MiwzODYuMDI3LDY0LjM3MywzNzcuNzA3LDU2LjA1M3oiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
                </div>

              </Stats>
            </Card>

          </Item>
        ))}
      </Grid>
      <Popup open={open} closeOnDocumentClick onClose={closeModal} {...{ overlayStyle }}>
        <Modal theme={theme}>
          <div className="modal">
            <a className="close" onClick={closeModal}>
              &times;
                </a>
            <UpdateMemeForm memeData={memeUpdateData} closeModal={closeModal} />
          </div>
        </Modal>
      </Popup>

    </Wrapper>
  );
};
