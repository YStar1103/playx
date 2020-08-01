import React, { Component } from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import { IonRange, IonIcon, IonSelect, IonSelectOption, IonCard, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonButtons, IonButton } from '@ionic/react';
import { createOutline } from 'ionicons/icons';

export class Playx extends Component {

  bg = new window.Image(window.innerWidth, window.innerHeight)
  state = {
    textTitle: {
    textEditVisible: false,
    textX: 0,
    textY: 0,
    textValue: "Hello",
    width: window.innerWidth,
    fontStyle: "normal",
    align: "center",
    id: 0,
    sizeValue: 96,
    colorValue: "black"
  },
    bg: {
      src: 'https://sacrebleu-galerie.com/wp-content/uploads/2018/06/clean-white-brick-wall-textures-plain.jpg'
    }
  };

  handleTextareaKeyDown = (e: any) => {
    if (e.keyCode === 13) {
          let {textTitle} = this.state;

      textTitle.textEditVisible = false;
      this.setState({
          textTitle
        });
    }
  };

  handleCloseButton = () => {
          let {textTitle} = this.state;
    textTitle.textEditVisible = false;
    this.setState({
          textTitle
        });
  };

  handleTextEdit = (e: any) => {
          let {textTitle} = this.state;
    textTitle.textValue = e.target.value;
    this.setState({
          textTitle
        });
  };

  handleSizeEdit = (e: any) => {
          let {textTitle} = this.state;
    textTitle.sizeValue = e.target.value;
    this.setState({
          textTitle
        });
  };

  handleColorEdit = (e: any) => {
          let {textTitle} = this.state;
    textTitle.colorValue = e.target.value;
    this.setState({
          textTitle
        });
  };
  handleTextClick = (e: any) => {
    let absPos = {x: 0 , y: 0}
    let { textTitle} = this.state;
    if (!textTitle.textEditVisible) {
      textTitle.textEditVisible = true;
    } else {
      textTitle.textEditVisible = false;
    }
    textTitle.textX = absPos.x;
    textTitle.textY = absPos.y;
    this.setState({
          textTitle
        });
  };
  render() {
          this.bg.src = this.state.bg.src;
    return (
        <div>
          <IonHeader>
        <IonToolbar>
          <IonTitle>PlayX Demo</IonTitle>
          <IonButtons slot="primary">
            <IonButton onClick={(e)=> {this.handleTextClick(e)}} color="danger">
              <IonIcon slot="end" icon={createOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

          <IonCard
            style={{
              display: this.state.textTitle.textEditVisible ? "block" : "none",
              position: "absolute",
              bottom: "5vh",

            }}
          >
            <IonItem>
              <IonLabel position="fixed">Title</IonLabel>
              <IonInput
                value={this.state.textTitle.textValue}
                onIonChange={e => this.handleTextEdit(e)}
                onKeyDown={e => this.handleTextareaKeyDown(e)}
                placeholder="Title"
              >
              </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="fixed">Font Size</IonLabel>
              <IonRange
                value={this.state.textTitle.sizeValue}
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
                value={this.state.textTitle.colorValue}
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
              <Image image={this.bg} />
              <Text
                fontSize={this.state.textTitle.sizeValue}
                draggable
                text={this.state.textTitle.textValue}
                x={100}
                y={100}
                wrap="word"
                width={this.state.textTitle.width}
                fill={this.state.textTitle.colorValue}
                onClick={e => this.handleTextClick(e)}
              />
            </Layer>
          </Stage>
        </div>
    );
  }
}