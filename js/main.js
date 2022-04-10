Splitting();
//메인 페이지에서 슬라이드
const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  pagination: {
    el: "#mainVisual .pagination",
    type: "bullets",
    clickable: true,
  },
});
// 마이페이지 -> 주문내역에서 달력 추가
$(function () {
  $("#history_start_date,#history_end_date").datepicker({
    changeMonth: true,
    changeYear: true,
    showMonthAfterYear: true,
    dayNamesMin: ["월", "화", "수", "목", "금", "토", "일"],
    dateFormat: "yy-mm-dd",
  });
  $("#history_start_date").datepicker("option", "maxDate", $("#history_end_date").val());
  $("#history_start_date").datepicker("option", "onClose", function (selectedDate) {
    $("#history_end_date").datepicker("option", "minDate", selectedDate);
  });

  $("#history_end_date").datepicker();
  $("#history_end_date").datepicker("option", "minDate", $("#history_start_date").val());
  $("#history_end_date").datepicker("option", "onClose", function (selectedDate) {
    $("#history_start_date").datepicker("option", "maxDate", selectedDate);
  });
});
// 마이페이지 -> 주문내역에서 li 클릭시 selected 클래서 넣고 색변하고 2번째 li 클릭시 select option 부분만 제거함
$(document).ready(function () {
  $("#first_li").click(function () {
    $("#first_li").addClass("selected");
    $("#first_li_2").removeClass("selected");
    $(".state_select").removeClass("off");
  });
  $("#first_li_2").click(function () {
    $("#first_li_2").addClass("selected");
    $("#first_li").removeClass("selected");
    $(".state_select").addClass("off");
  });
});
//관심상품 Wish-list 체크박스 설정
$(document).ready(function () {
  $(".check-all").click(function () {
    $(".w_ch").prop("checked", this.checked);
  });
});
