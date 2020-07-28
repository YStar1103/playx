import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image, Text } from 'react-konva';
import useImage from 'use-image'
import Konva from 'konva';
import { IonRange, IonButton, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader, IonSplitPane, IonRouterOutlet, IonMenu, IonText, IonSelect, IonSelectOption, IonRadioGroup, IonRadio, IonImg, IonThumbnail, IonCol, IonRow, IonGrid, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';


export class PlayHeader extends Component {
  render() {
    return (
      <IonHeader>
        <IonToolbar>
          <IonTitle>PlayX Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  }
}

export class Playx extends Component {

  state = {
    newTextObj: {
      textEditVisible: false,
      textX: 0,
      textY: 0,
      textValue: "Hello",
      fontSize: 8,
      width: window.innerWidth,
      fontStyle: "normal",
      align: "left",
      id: 0,
      sizeValue: 96,
      colorValue: "black"
    },
    bg: {
      img: 'x'
    }
  };

  handleTextareaKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      let { newTextObj } = this.state;

      newTextObj.textEditVisible = false;
      this.setState({
        newTextObj
      });
    }
  };


  handleCloseButton = () => {

    let { newTextObj } = this.state;

    newTextObj.textEditVisible = false;
    this.setState({
      newTextObj
    });

  };

  handleTextEdit = (e: any) => {
    let { newTextObj } = this.state;
    newTextObj.textValue = e.target.value;
    this.setState({
      newTextObj
    });
  };

  handleSizeEdit = (e: any) => {
    let { newTextObj } = this.state;
    newTextObj.sizeValue = e.target.value;
    this.setState({
      newTextObj
    });
  };

  handleColorEdit = (e: any) => {
    let { newTextObj } = this.state;
    newTextObj.colorValue = e.target.value;
    this.setState({
      newTextObj
    });
  };
  handleTextDblClick = (e: any) => {
    const absPos = e.target.getAbsolutePosition();
    let { newTextObj } = this.state;
    newTextObj.textEditVisible = true;
    newTextObj.textX = absPos.x;
    newTextObj.textY = absPos.y;
    this.setState({
      newTextObj
    });
  };
  render() {
    const url = 'https://sacrebleu-galerie.com/wp-content/uploads/2018/06/clean-white-brick-wall-textures-plain.jpg';
    const image = new window.Image();
    image.src = url
    return (
      <div>
        <PlayHeader />
        <IonCard
          style={{
            display: this.state.newTextObj.textEditVisible ? "block" : "none",
            position: "absolute",
            top: this.state.newTextObj.textY + "px",
            left: this.state.newTextObj.textX + "px"
          }}
        >
          <IonItem>
            <IonLabel position="fixed">Title</IonLabel>
            <IonInput
              value={this.state.newTextObj.textValue}
              onIonChange={e => this.handleTextEdit(e)}
              onKeyDown={e => this.handleTextareaKeyDown(e)}
              placeholder="Title"
            >
            </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Font Size</IonLabel>
            <IonRange
              value={this.state.newTextObj.sizeValue}
              min={64}
              max={250}
              step={2}
              pin={true}
              snaps={true}
              onIonChange={e => this.handleSizeEdit(e)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Color</IonLabel>
            <IonSelect
              value={this.state.newTextObj.colorValue}
              onIonChange={e => this.handleColorEdit(e)}>
              <IonSelectOption value="black">Black</IonSelectOption>
              <IonSelectOption value="green">Green</IonSelectOption>
              <IonSelectOption value="red">Red</IonSelectOption>
              <IonSelectOption value="blue">Blue</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonButton
              color="danger"
              expand="block"
              onClick={() => this.handleCloseButton()}
            >
              Close
          </IonButton>
          </IonItem>
        </IonCard>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Image image={image} />
            <Text
              fontSize={this.state.newTextObj.sizeValue}
              align={"center"}
              draggable
              text={this.state.newTextObj.textValue}
              x={100}
              y={100}
              wrap="word"
              width={this.state.newTextObj.width}
              fill={this.state.newTextObj.colorValue}
              onClick={e => this.handleTextDblClick(e)}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}


// export default ColoredRect;