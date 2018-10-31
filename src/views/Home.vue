<template>
  <div class="home">
    <div class="header">
      <h2 class="heading">Notes</h2>
    </div>
    <div class="main">
      <div class="notes">
        <div class="notes-wrapper">
          <ul>
            <li v-for="(note, index) of notes" @click="showNote(note, index)" :style="[activeNote == index ? {'background': '#efefef'} : {'background': '#fff'}]">
              <h4 class="note-title">{{ note.text }}</h4>
              <div>
                <span class="time">{{ moment(note.date).fromNow() }}</span>
                <img class="trash" src="../assets/images/trash.png" alt="" v-if="activeNote == index">
              </div>
            </li>
          </ul>
        </div>
        <div class="unallocated-space" @click="removeSelection()"></div>
      </div>
      <div class="note">
        <div class="create-new-note" v-if="activeNote == undefined" @click="newNote()">
          <img class="plus-icon" src="../assets/images/plus.png" alt="">
          <h4 class="create-new-text">Create New Note</h4>
        </div>
        <div class="input-note effect" v-else>
          <textarea class="text-area" id="text-area" v-model="note.text" placeholder="Type notes here" @input="updateNote()" autofocus></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from 'store'
import uniqid from 'uniqid'
import $ from 'jquery'
import moment from 'moment'

export default {
  name: 'home',
  data() {
    return {
      notes: undefined,
      localNotes: [
        {'id': uniqid(), 'date': 1540809560841, 'text': 'Hello wordl dfas dgttry tyyugvgf'},
        {'id': uniqid(), 'date': 1540709560841, 'text': 'Hello world'}
      ],
      note: '',

      activeNote: undefined
    }
  },
  
  methods: {
    showNote(note, index) {
      if(this.note.text == '') {
        this.notes.splice(this.activeNote, 1);
        store.set('notes', this.notes);
        this.note = this.notes[0]
      }
      if(this.activeNote == index) return this.activeNote = undefined
      this.activeNote = index
      this.note = note
      setTimeout(() => { $('#text-area').focus() }, 300);;
    },

    updateNote() {
      this.notes.splice(this.activeNote, 1, {id: this.note.id, text: this.note.text, date: this.note.date});
      store.set('notes', this.notes);
    },

    newNote() {
      this.note = { date: Number(moment().format('x')), id: uniqid(), text: '' }
      this.notes.unshift(this.note)
      store.set('notes', this.notes);
      this.activeNote = 0
    },
    
    removeSelection() {
      if(this.note.text == '') {
        this.notes.splice(this.activeNote, 1);
        store.set('notes', this.notes);
        this.note = this.notes[0]
      }
      this.activeNote = undefined
    }
  },

  mounted() {
    this.notes = store.get('notes')
    
    if(this.notes == undefined) {
      store.set('notes', this.localNotes)
      this.notes = store.get('notes')
    }
  }
}
</script>

<style lang="scss">
  .home {
    .header {
      background: #fbc02d;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;

      .heading {
        font-size: 35px;
      }
    }

    .main {
      display: flex;
      height: calc(100vh - 70px);

      .notes {
        width: 30vw;
        display: flex;
        flex-direction: column;

        .notes-wrapper {
          overflow: auto;

          ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
              border: 1px solid;
              border-image: linear-gradient(to right, #fff, #fbc02d, #fff) !important;
              border-image-slice: 1 !important;
              border-top: none;
              border-right: none;
              border-left: none;
              padding: 5px 10px;
              cursor: pointer;

              .note-title {
                font-size: 20px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 2px;
                text-transform: capitalize;
              }

              div {
                display: flex;
                align-items: center;

                .time {
                  font-size: 15px;
                  color: #717171;
                }

                .trash {
                  margin-left: 8px;
                  height: 15px;
                }
              }
            }
          }
        }

        .unallocated-space { flex-grow: 1 }
      }

      .note {
        background: #efefef;
        width: 70vw;

        .create-new-note {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          .plus-icon { height: 68px }
          
          .create-new-text {
            color: #fbc02d;
            margin-top: 10px;
            font-size: 18px;
          }
        }

        .input-note {
          margin: 20px;
          display: flex;
          height: calc(100vh - 110px);
            
          .text-area {
            width: 100%;
            padding: 10px;
            border: none;
            resize: none;
            outline: none;
            z-index: 1;
            font-size: 17px;
            font-weight: 600;
            font-family: Raleway;
          }
        }

        .effect { position: relative }
        .effect:before, .effect:after {
          position: absolute;
          content: "";
          bottom: 16px;
          left: 10px;
          width: 50%;
          top: 80%;
          max-width:300px;
          box-shadow: 0 15px 10px #777;
          transform: rotate(-3deg);
        }

        .effect:after {
          transform: rotate(3deg);
          right: 10px;
          left: auto;
        }
      }
    }
  }
</style>

