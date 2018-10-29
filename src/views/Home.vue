<template>
  <div class="home">
    <div class="header">
      <h2 class="heading">Notes</h2>
    </div>
    <div class="main">
      <div class="notes">
        <div class="notes-wrapper">
          <ul>
            <li v-for="item of [1,2,3]">
              <h4 class="note-title">Hello world!! fdgsdg sgfsddff mo</h4>
              <p class="time">2 minutes ago</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="note">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
  .home {
    .header {
      background: #f2b951;
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
        border-right: 1px solid #ddd;

        .notes-wrapper {
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

              .note-title {
                font-size: 20px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 2px;
              }

              .time {
                font-size: 15px;
                color: #717171;
              }
            }
          }
        }
      }

      .note {
        background: #efefef;
        width: 70vw;
      }
    }
  }
</style>

