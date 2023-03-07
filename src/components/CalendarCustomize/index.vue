<template>
  <div
    class="relative items-center flex h-full justify-center max-w-[600px] w-full shadow-[0_5px_20px_rgba(0,0,0,0.3)] mx-auto my-0 p-4 md:p-6 bg-white"
  >
    <img
      class="absolute w-[300px] h-[381px] bottom-[-50px] -right-20"
      src="@/assets/img/pattern/invitation-right-image.png"
    />
    <div
      class="calendar bg-[#fff3e015] rounded h-[540px] transition-[0.9s] w-full border-4 border-solid border-[#644d4d]"
    >
      <div class="front">
        <div class="current-date px-[16px] py-[16px] md:px-[40px] md:py-[30px]">
          <h1>Save the Date</h1>
          <h1>29-30 April 2023</h1>
        </div>

        <div class="current-month">
          <ul class="week-days py-[30px] px-[16px] md:px-[40px]">
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            <li>Sun</li>
          </ul>

          <div class="weeks py-0 px-[16px] md:px-[40px]">
            <div class="first">
              <span class="last-month">27</span>
              <span class="last-month">28</span>
              <span class="last-month">29</span>
              <span class="last-month">30</span>
              <span class="last-month">31</span>
              <span>01</span>
              <span>02</span>
            </div>

            <div class="second">
              <span>03</span>
              <span>04</span>
              <span>05</span>
              <span>06</span>
              <span>07</span>
              <span>08</span>
              <span>09</span>
            </div>

            <div class="third">
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
              <span>16</span>
            </div>

            <div class="fourth">
              <span>17</span>
              <span>18</span>
              <span>19</span>
              <span>20</span>
              <span>21</span>
              <span>22</span>
              <span>23</span>
            </div>

            <div class="fifth">
              <span>24</span>
              <span>25</span>
              <span>26</span>
              <span>27</span>
              <span>28</span>
              <span class="active">29</span>
              <span class="active">30</span>
            </div>
          </div>
        </div>
        <div class="py-3">
          <Countdown
            class="countdown"
            deadline="2023-04-29 09:00:00"
            mainColor="#EC685C"
            :flipAnimation="flipAnimation"
            :labels="labels"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Countdown } from "vue3-flip-countdown";
export default {
  name: "CalendarCustomize",
  components: {
    Countdown,
  },
  data() {
    return {
      flipAnimation: false,
      labels: { days: "Ngày", hours: "Giờ", minutes: "Phút", seconds: "Giây" },
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Cookie&family=Dancing+Script&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;
.container {
  position: relative;
  padding: 1.5rem;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.right-vec {
  position: absolute;
  width: 300px;
  height: 381px;
  right: -80px;
  bottom: -50px;
}

.calendar {
  @media (max-width: 1000px) {
    width: 80vw;
  }
}

/* Front - Calendar */
.front {
  transform: rotateY(0deg);
}

.current-date {
  border-bottom: 1px solid rgba(73, 114, 133, 0.6);
  display: flex;
  justify-content: space-between;
}

.current-date h1 {
  font-family: "Dancing Script", cursive;
  color: #3f6136;
  font-size: 1.4em;
  font-weight: 300;
}

.week-days {
  font-family: "Comfortaa", cursive;
  color: #a17d7d;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}

.days {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.weeks {
  font-family: "Comfortaa", cursive;
  color: #644d4d;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.weeks div {
  display: flex;
  font-size: 1.2em;
  font-weight: 300;
  justify-content: space-between;
}

.last-month {
  opacity: 0.3;
}

.weeks span {
  padding: 10px;
}

.weeks span.active {
  background: #eebbb9;
  color: #fff;
  border-radius: 50%;
}

.weeks span:not(.last-month):hover {
  cursor: pointer;
  font-weight: 600;
}

.event {
  position: relative;
}

.event:after {
  content: "•";
  color: #f78536;
  font-size: 1.4em;
  position: absolute;
  right: -4px;
  top: -4px;
}

/* Back - Event form */

.back {
  height: 100%;
  transform: rotateY(180deg);
}

.back input {
  background: none;
  border: none;
  border-bottom: 1px solid rgba(73, 114, 133, 0.6);
  color: #dfebed;
  font-size: 1.4em;
  font-weight: 300;
  padding: 30px 40px;
  width: 100%;
}

.info {
  color: #dfebed;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 1.2em;
  padding: 30px 40px;
}

.info div:not(.observations) {
  margin-bottom: 40px;
}

.info span {
  font-weight: 300;
}

.info .date {
  display: flex;
  justify-content: space-between;
}

.info .date p {
  width: 50%;
}

.info .address p {
  width: 100%;
}

.actions {
  bottom: 0;
  border-top: 1px solid rgba(73, 114, 133, 0.6);
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
}

.actions button {
  background: none;
  border: 0;
  color: #fff;
  font-weight: 600;
  letter-spacing: 3px;
  margin: 0;
  padding: 30px 0;
  text-transform: uppercase;
  width: 50%;
}

.actions button:first-of-type {
  border-right: 1px solid rgba(73, 114, 133, 0.6);
}

.actions button:hover {
  background: #497285;
  cursor: pointer;
}

.actions button:active {
  background: #5889a0;
  outline: none;
}

/* Flip animation */

.flip {
  transform: rotateY(180deg);
}

.front,
.back {
  backface-visibility: hidden;
}

.countdown {
  font-family: "Cookie", cursive;
  zoom: 130%;
  display: flex;
  justify-content: space-evenly;
  padding: 0 40px;
}
</style>