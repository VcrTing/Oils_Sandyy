var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot, createElementVNode, createCommentVNode, Fragment, renderList, toDisplayString, withModifiers, normalizeStyle, createTextVNode } from "vue";
var CalendarMath = {
  today() {
    return this.dateOnly(new Date());
  },
  beginningOfPeriod(d, periodUom, startDow) {
    switch (periodUom) {
      case "year":
        return new Date(d.getFullYear(), 0);
      case "month":
        return new Date(d.getFullYear(), d.getMonth());
      case "week":
        return this.beginningOfWeek(d, startDow);
      default:
        return d;
    }
  },
  daysOfWeek(weekStart) {
    return [...Array(7)].map((_, i) => this.addDays(weekStart, i));
  },
  addDays(d, days) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + days, d.getHours(), d.getMinutes(), d.getSeconds());
  },
  beginningOfWeek(d, startDow) {
    return this.addDays(d, (startDow - d.getDay() - 7) % -7);
  },
  endOfWeek(d, startDow) {
    return this.addDays(this.beginningOfWeek(d, startDow), 7);
  },
  beginningOfMonth: (d) => new Date(d.getFullYear(), d.getMonth()),
  instanceOfMonth: (d) => Math.ceil(d.getDate() / 7),
  incrementPeriod(d, uom, count) {
    return new Date(d.getFullYear() + (uom == "year" ? count : 0), d.getMonth() + (uom == "month" ? count : 0), d.getDate() + (uom == "week" ? count * 7 : 0));
  },
  paddedMonth: (d) => ("0" + String(d.getMonth() + 1)).slice(-2),
  paddedDay: (d) => ("0" + String(d.getDate())).slice(-2),
  isoYearMonth(d) {
    return d.getFullYear() + "-" + this.paddedMonth(d);
  },
  isoYearMonthDay(d) {
    return this.isoYearMonth(d) + "-" + this.paddedDay(d);
  },
  isoMonthDay(d) {
    return this.paddedMonth(d) + "-" + this.paddedDay(d);
  },
  formattedTime(d, locale, options) {
    if (d.getHours() === 0 && d.getMinutes() === 0 && d.getSeconds() === 0)
      return "";
    if (!this.supportsIntl()) {
      var ms = new Date().getTimezoneOffset() * 6e4;
      return new Date(d.getTime() - ms).toISOString().slice(11, 16);
    }
    return d.toLocaleTimeString(locale, options);
  },
  formattedPeriod(startDate, endDate, periodUom, monthNames) {
    const singleYear = startDate.getFullYear() === endDate.getFullYear();
    const singleMonth = this.isSameMonth(startDate, endDate);
    const isYear = periodUom === "year";
    const isMonth = periodUom === "month";
    const isWeek = !isYear && !isMonth;
    let s = [];
    s.push(monthNames[startDate.getMonth()]);
    if (isWeek) {
      s.push(" ");
      s.push(startDate.getDate());
    }
    if (!singleYear) {
      s.push(isWeek ? ", " : " ");
      s.push(startDate.getFullYear());
    }
    if (!singleMonth || !singleYear) {
      s.push(" \u2013 ");
      if (!singleMonth) {
        s.push(monthNames[endDate.getMonth()]);
      }
      if (isWeek)
        s.push(" ");
    } else if (isWeek) {
      s.push(" \u2013 ");
    }
    if (isWeek) {
      s.push(endDate.getDate());
      s.push(", ");
    } else {
      s.push(" ");
    }
    s.push(endDate.getFullYear());
    return s.join("");
  },
  dayDiff(d1, d2) {
    const endDate = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate()), startDate = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
    return (endDate - startDate) / 864e5;
  },
  isSameDate(d1, d2) {
    return d1 && d2 && this.dayDiff(d1, d2) === 0;
  },
  isSameDateTime: (d1, d2) => d1 && d2 && d1.getTime() === d2.getTime(),
  isSameMonth: (d1, d2) => d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth(),
  isPastMonth(d) {
    return this.beginningOfMonth(d) < this.beginningOfMonth(this.today());
  },
  isFutureMonth(d) {
    return this.beginningOfMonth(d) > this.beginningOfMonth(this.today());
  },
  isInFuture(d) {
    return this.dateOnly(d) > this.today();
  },
  isInPast(d) {
    return this.dateOnly(d) < this.today();
  },
  isLastInstanceOfMonth(d) {
    return d.getMonth() !== this.addDays(d, 7).getMonth();
  },
  isLastDayOfMonth(d) {
    return d.getMonth() !== this.addDays(d, 1).getMonth();
  },
  fromIsoStringToLocalDate(s) {
    let d = [...Array(7)].map((_) => 0);
    s.split(/\D/, 7).forEach((s2, i) => d[i] = Number(s2));
    d[1]--;
    return new Date(d[0], d[1], d[2], d[3], d[4], d[5], d[6]);
  },
  toLocalDate(d) {
    return typeof d === "string" ? this.fromIsoStringToLocalDate(d) : new Date(d);
  },
  dateOnly(d) {
    const d2 = new Date(d);
    d2.setHours(0, 0, 0, 0);
    return d2;
  },
  languageCode: (l) => l.substring(0, 2),
  supportsIntl: () => typeof Intl !== "undefined",
  getFormattedMonthNames(locale, format) {
    if (!this.supportsIntl())
      return [...Array(12)].map((_) => "");
    const formatter = new Intl.DateTimeFormat(locale, { month: format });
    return [...Array(12)].map((_, i) => formatter.format(new Date(2017, i, 1)));
  },
  getFormattedWeekdayNames(locale, format, startingDayOfWeek) {
    if (!this.supportsIntl())
      return [...Array(7)].map((_) => "");
    const formatter = new Intl.DateTimeFormat(locale, { weekday: format });
    return [...Array(7)].map((_, i) => formatter.format(new Date(2017, 0, (i + 1 + startingDayOfWeek) % 7)));
  },
  getDefaultBrowserLocale() {
    if (typeof navigator === "undefined")
      return "unk";
    return (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language).toLowerCase();
  },
  normalizeItem(item, isHovered) {
    const itemClasses = item.classes ? [...item.classes] : [];
    if (isHovered)
      itemClasses.push("isHovered");
    return {
      originalItem: item,
      startDate: this.toLocalDate(item.startDate),
      endDate: this.toLocalDate(item.endDate || item.startDate),
      classes: itemClasses,
      title: item.title || "Untitled",
      id: item.id,
      url: item.url
    };
  }
};
class CalendarViewState {
  constructor() {
    __publicField(this, "currentDragItem", null);
    __publicField(this, "dateSelectionOrigin", null);
    __publicField(this, "currentHoveredItemId", "");
    __publicField(this, "CalendarMath", CalendarMath);
  }
}
var CalendarView_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$1 = defineComponent({
  name: "CalendarView",
  props: {
    showDate: { type: Date, default: void 0 },
    displayPeriodUom: { type: String, default: "month" },
    displayPeriodCount: { type: Number, default: 1 },
    displayWeekNumbers: { type: Boolean, default: false },
    locale: { type: String, default: void 0 },
    monthNameFormat: { type: String, default: "long" },
    weekdayNameFormat: { type: String, default: "short" },
    showTimes: { type: Boolean, default: false },
    timeFormatOptions: { type: Object, default: () => {
    } },
    disablePast: { type: Boolean, default: false },
    disableFuture: { type: Boolean, default: false },
    enableDateSelection: { type: Boolean, default: false },
    selectionStart: { type: Date, default: null },
    selectionEnd: { type: Date, default: null },
    enableDragDrop: { type: Boolean, default: false },
    startingDayOfWeek: { type: Number, default: 0 },
    items: { type: Array, default: () => [] },
    dateClasses: { type: Object, default: () => {
    } },
    itemTop: { type: String, default: "1.4em" },
    itemContentHeight: { type: String, default: "1.4em" },
    itemBorderHeight: { type: String, default: "2px" },
    periodChangedCallback: { type: Function, default: void 0 },
    currentPeriodLabel: { type: String, default: "" },
    currentPeriodLabelIcons: { type: String, default: "\u21E4-\u21E5" },
    doEmitItemMouseEvents: { type: Boolean, default: false }
  },
  emits: [
    "input",
    "period-changed",
    "click-date",
    "click-item",
    "item-mouseenter",
    "item-mouseleave",
    "drag-start",
    "drag-over-date",
    "drag-enter-date",
    "drag-leave-date",
    "drop-on-date",
    "date-selection",
    "date-selection-start",
    "date-selection-finish"
  ],
  data: () => new CalendarViewState(),
  setup() {
    return { CalendarMath };
  },
  computed: {
    displayLocale() {
      return this.locale || CalendarMath.getDefaultBrowserLocale();
    },
    defaultedShowDate() {
      if (this.showDate)
        return CalendarMath.dateOnly(this.showDate);
      return CalendarMath.today();
    },
    periodStart() {
      return CalendarMath.beginningOfPeriod(this.defaultedShowDate, this.displayPeriodUom, this.startingDayOfWeek);
    },
    periodEnd() {
      return CalendarMath.addDays(CalendarMath.incrementPeriod(this.periodStart, this.displayPeriodUom, this.displayPeriodCount), -1);
    },
    periodStartCalendarWeek() {
      const firstWeekStarts = CalendarMath.beginningOfWeek(CalendarMath.beginningOfPeriod(this.periodStart, "year", 0), this.startingDayOfWeek);
      const periodWeekStarts = CalendarMath.beginningOfWeek(this.periodStart, this.startingDayOfWeek);
      return 1 + Math.floor(CalendarMath.dayDiff(firstWeekStarts, periodWeekStarts) / 7);
    },
    displayFirstDate() {
      return CalendarMath.beginningOfWeek(this.periodStart, this.startingDayOfWeek);
    },
    displayLastDate() {
      return CalendarMath.endOfWeek(this.periodEnd, this.startingDayOfWeek);
    },
    weeksOfPeriod() {
      const numWeeks = Math.floor((CalendarMath.dayDiff(this.displayFirstDate, this.displayLastDate) + 1) / 7);
      return [...Array(numWeeks)].map((_, i) => CalendarMath.addDays(this.displayFirstDate, i * 7));
    },
    monthNames() {
      return CalendarMath.getFormattedMonthNames(this.displayLocale, this.monthNameFormat);
    },
    weekdayNames() {
      return CalendarMath.getFormattedWeekdayNames(this.displayLocale, this.weekdayNameFormat, this.startingDayOfWeek);
    },
    fixedItems() {
      const self = this;
      if (!this.items)
        return [];
      return this.items.map((item) => CalendarMath.normalizeItem(item, item.id === self.currentHoveredItemId));
    },
    currentPeriodStart() {
      return CalendarMath.beginningOfPeriod(CalendarMath.today(), this.displayPeriodUom, this.startingDayOfWeek);
    },
    currentPeriodEnd() {
      return CalendarMath.addDays(CalendarMath.incrementPeriod(this.currentPeriodStart, this.displayPeriodUom, this.displayPeriodCount), -1);
    },
    periodLabel() {
      return CalendarMath.formattedPeriod(this.periodStart, this.periodEnd, this.displayPeriodUom, this.monthNames);
    },
    currentPeriodLabelFinal() {
      const c = this.currentPeriodStart;
      const s = this.periodStart;
      if (!this.currentPeriodLabel)
        return CalendarMath.formattedPeriod(c, this.currentPeriodEnd, this.displayPeriodUom, this.monthNames);
      if (this.currentPeriodLabel === "icons")
        return this.currentPeriodLabelIcons[Math.sign(c.getTime() - s.getTime()) + 1];
      return this.currentPeriodLabel;
    },
    headerProps() {
      return {
        previousYear: this.getIncrementedPeriod(-12),
        previousPeriod: this.getIncrementedPeriod(-1),
        nextPeriod: this.getIncrementedPeriod(1),
        previousFullPeriod: this.getIncrementedPeriod(-this.displayPeriodCount),
        nextFullPeriod: this.getIncrementedPeriod(this.displayPeriodCount),
        nextYear: this.getIncrementedPeriod(12),
        currentPeriod: this.currentPeriodStart,
        currentPeriodLabel: this.currentPeriodLabelFinal,
        periodStart: this.periodStart,
        periodEnd: this.periodEnd,
        displayLocale: this.displayLocale,
        displayFirstDate: this.displayFirstDate,
        displayLastDate: this.displayLastDate,
        monthNames: this.monthNames,
        fixedItems: this.fixedItems,
        periodLabel: this.periodLabel
      };
    },
    periodRange() {
      return {
        periodStart: this.periodStart,
        periodEnd: this.periodEnd,
        displayFirstDate: this.displayFirstDate,
        displayLastDate: this.displayLastDate
      };
    }
  },
  watch: {
    periodRange: {
      immediate: true,
      handler(newVal) {
        if (this.periodChangedCallback) {
          this.$emit("period-changed");
          this.periodChangedCallback(newVal, "watch");
        }
      }
    }
  },
  methods: {
    onClickDay(day, windowEvent) {
      if (this.disablePast && CalendarMath.isInPast(day))
        return;
      if (this.disableFuture && CalendarMath.isInFuture(day))
        return;
      this.$emit("click-date", day, this.findAndSortItemsInDateRange(day, day), windowEvent);
    },
    onClickItem(calendarItem, windowEvent) {
      this.$emit("click-item", calendarItem, windowEvent);
    },
    getColumnDOWClass(dayIndex) {
      return "dow" + (dayIndex + this.startingDayOfWeek) % 7;
    },
    getIncrementedPeriod(count) {
      const newStartDate = CalendarMath.incrementPeriod(this.periodStart, this.displayPeriodUom, count);
      const newEndDate = CalendarMath.incrementPeriod(newStartDate, this.displayPeriodUom, this.displayPeriodCount);
      if (this.disablePast && newEndDate <= CalendarMath.today())
        return null;
      if (this.disableFuture && newStartDate > CalendarMath.today())
        return null;
      return newStartDate;
    },
    onMouseEnterItem(calendarItem, windowEvent) {
      this.currentHoveredItemId = calendarItem.id;
      if (this.doEmitItemMouseEvents) {
        this.$emit("item-mouseenter", calendarItem, windowEvent);
      }
    },
    onMouseLeaveItem(calendarItem, windowEvent) {
      this.currentHoveredItemId = "";
      if (this.doEmitItemMouseEvents) {
        this.$emit("item-mouseleave", calendarItem, windowEvent);
      }
    },
    onDragDateStart(day, windowEvent) {
      var _a, _b;
      if (!this.enableDateSelection)
        return false;
      (_a = windowEvent.dataTransfer) == null ? void 0 : _a.setData("text", day.toString());
      let img = new Image();
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
      (_b = windowEvent.dataTransfer) == null ? void 0 : _b.setDragImage(img, 10, 10);
      this.dateSelectionOrigin = day;
      this.emitDateSelection("date-selection-start", day, windowEvent);
      return true;
    },
    onDragItemStart(calendarItem, windowEvent) {
      var _a;
      if (!this.enableDragDrop)
        return false;
      (_a = windowEvent.dataTransfer) == null ? void 0 : _a.setData("text", calendarItem.id);
      this.currentDragItem = calendarItem;
      this.dateSelectionOrigin = null;
      this.$emit("drag-start", calendarItem, windowEvent);
      return true;
    },
    handleDragEvent(bubbleEventName, bubbleParam, windowEvent) {
      if (!this.enableDragDrop)
        return false;
      this.$emit(bubbleEventName, this.currentDragItem, bubbleParam, windowEvent);
      return true;
    },
    onDragOver(day, windowEvent) {
      this.handleDragEvent("drag-over-date", day, windowEvent);
    },
    onDragEnter(day, windowEvent) {
      if (this.enableDateSelection && this.dateSelectionOrigin) {
        this.emitDateSelection("date-selection", day, windowEvent);
        return;
      }
      if (!this.handleDragEvent("drag-enter-date", day, windowEvent))
        return;
      const el = windowEvent.target;
      el.classList.add("draghover");
    },
    onDragLeave(day, windowEvent) {
      if (this.enableDateSelection && this.selectionStart)
        return;
      if (!this.handleDragEvent("drag-leave-date", day, windowEvent))
        return;
      const el = windowEvent.target;
      el.classList.remove("draghover");
    },
    onDrop(day, windowEvent) {
      if (this.enableDateSelection && this.dateSelectionOrigin) {
        this.emitDateSelection("date-selection-finish", day, windowEvent);
        return;
      }
      if (!this.handleDragEvent("drop-on-date", day, windowEvent))
        return;
      const el = windowEvent.target;
      el.classList.remove("draghover");
    },
    emitDateSelection(eventName, toDate, windowEvent) {
      if (!this.dateSelectionOrigin)
        return;
      this.$emit(eventName, toDate <= this.dateSelectionOrigin ? [toDate, this.dateSelectionOrigin, windowEvent] : [this.dateSelectionOrigin, toDate, windowEvent]);
    },
    itemComparer(a, b) {
      if (a.startDate < b.startDate)
        return -1;
      if (b.startDate < a.startDate)
        return 1;
      if (a.endDate > b.endDate)
        return -1;
      if (b.endDate > a.endDate)
        return 1;
      return a.id < b.id ? -1 : 1;
    },
    findAndSortItemsInWeek(weekStart) {
      return this.findAndSortItemsInDateRange(weekStart, CalendarMath.addDays(weekStart, 6));
    },
    findAndSortItemsInDateRange(startDate, endDate) {
      return this.fixedItems.filter((item) => item.endDate >= startDate && CalendarMath.dateOnly(item.startDate) <= endDate, this).sort(this.itemComparer);
    },
    dayHasItems(day) {
      return !!this.fixedItems.find((d) => d.endDate >= day && CalendarMath.dateOnly(d.startDate) <= day);
    },
    dayIsSelected(day) {
      if (!this.selectionStart || !this.selectionEnd)
        return false;
      if (day < CalendarMath.dateOnly(this.selectionStart))
        return false;
      if (day > CalendarMath.dateOnly(this.selectionEnd))
        return false;
      return true;
    },
    getWeekItems(weekStart) {
      const items = this.findAndSortItemsInWeek(weekStart);
      const results = [];
      const itemRows = [[], [], [], [], [], [], []];
      for (let i = 0; i < items.length; i++) {
        const ep = Object.assign({}, items[i], {
          classes: [...items[i].classes],
          itemRow: 0
        });
        const continued = ep.startDate < weekStart;
        const startOffset = continued ? 0 : CalendarMath.dayDiff(weekStart, ep.startDate);
        const span = Math.min(7 - startOffset, CalendarMath.dayDiff(CalendarMath.addDays(weekStart, startOffset), ep.endDate) + 1);
        if (continued)
          ep.classes.push("continued");
        if (CalendarMath.dayDiff(weekStart, ep.endDate) > 6)
          ep.classes.push("toBeContinued");
        if (CalendarMath.isInPast(ep.endDate))
          ep.classes.push("past");
        if (ep.originalItem.url)
          ep.classes.push("hasUrl");
        for (let d = 0; d < 7; d++) {
          if (d === startOffset) {
            let s = 0;
            while (itemRows[d][s])
              s++;
            ep.itemRow = s;
            itemRows[d][s] = true;
          } else if (d < startOffset + span) {
            itemRows[d][ep.itemRow] = true;
          }
        }
        ep.classes.push(`offset${startOffset}`);
        ep.classes.push(`span${span}`);
        results.push(ep);
      }
      return results;
    },
    getFormattedTimeRange(item) {
      const startTime = '<span class="startTime">' + CalendarMath.formattedTime(item.startDate, this.displayLocale, this.timeFormatOptions) + "</span>";
      let endTime = "";
      if (!CalendarMath.isSameDateTime(item.startDate, item.endDate)) {
        endTime = '<span class="endTime">' + CalendarMath.formattedTime(item.endDate, this.displayLocale, this.timeFormatOptions) + "</span>";
      }
      return startTime + endTime;
    },
    getItemTitle(item) {
      if (!this.showTimes)
        return item.title;
      return this.getFormattedTimeRange(item) + " " + item.title;
    },
    getItemTop(item) {
      const r = item.itemRow;
      const h = this.itemContentHeight;
      const b = this.itemBorderHeight;
      return `calc(${this.itemTop} + ${r}*${h} + ${r}*${b})`;
    }
  },
  setup() {
    return { CalendarMath };
  }
});
const _hoisted_1$1 = { class: "cv-header-days" };
const _hoisted_2$1 = {
  key: 0,
  class: "cv-weeknumber"
};
const _hoisted_3$1 = ["aria-multiselectable"];
const _hoisted_4$1 = {
  key: 0,
  class: "cv-weeknumber"
};
const _hoisted_5$1 = { class: "cv-weekdays" };
const _hoisted_6$1 = ["draggable", "aria-grabbed", "aria-label", "aria-selected", "aria-dropeffect", "onClick", "onDragstart", "onDrop", "onDragover", "onDragenter", "onDragleave"];
const _hoisted_7$1 = { class: "cv-day-number" };
const _hoisted_8 = ["draggable", "aria-grabbed", "title", "onDragstart", "onMouseenter", "onMouseleave", "onClick", "innerHTML"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    "aria-label": "Calendar",
    class: normalizeClass([
      "cv-wrapper",
      "locale-" + _ctx.CalendarMath.languageCode(_ctx.displayLocale),
      "locale-" + _ctx.displayLocale,
      "y" + _ctx.periodStart.getFullYear(),
      "m" + _ctx.CalendarMath.paddedMonth(_ctx.periodStart),
      "period-" + _ctx.displayPeriodUom,
      "periodCount-" + _ctx.displayPeriodCount,
      {
        past: _ctx.CalendarMath.isPastMonth(_ctx.periodStart),
        future: _ctx.CalendarMath.isFutureMonth(_ctx.periodStart),
        noIntl: !_ctx.CalendarMath.supportsIntl
      }
    ])
  }, [
    renderSlot(_ctx.$slots, "header", { headerProps: _ctx.headerProps }),
    createElementVNode("div", _hoisted_1$1, [
      _ctx.displayWeekNumbers ? (openBlock(), createElementBlock("div", _hoisted_2$1)) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.weekdayNames, (label, index) => {
        return renderSlot(_ctx.$slots, "dayHeader", {
          index: _ctx.getColumnDOWClass(index),
          label
        }, () => [
          (openBlock(), createElementBlock("div", {
            key: _ctx.getColumnDOWClass(index),
            class: normalizeClass([_ctx.getColumnDOWClass(index), "cv-header-day"])
          }, toDisplayString(label), 3))
        ]);
      }), 256))
    ]),
    createElementVNode("div", {
      "aria-multiselectable": _ctx.enableDateSelection,
      class: "cv-weeks"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.weeksOfPeriod, (weekStart, weekIndex) => {
        return openBlock(), createElementBlock("div", {
          key: `${weekIndex}-week`,
          class: normalizeClass(["cv-week", "week" + (weekIndex + 1), "ws" + _ctx.CalendarMath.isoYearMonthDay(weekStart)])
        }, [
          _ctx.displayWeekNumbers ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
            renderSlot(_ctx.$slots, "weekNumber", {
              date: weekStart,
              numberInYear: _ctx.periodStartCalendarWeek + weekIndex,
              numberInPeriod: weekIndex + 1
            }, () => [
              createElementVNode("span", null, toDisplayString(_ctx.periodStartCalendarWeek + weekIndex), 1)
            ])
          ])) : createCommentVNode("", true),
          createElementVNode("div", _hoisted_5$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.CalendarMath.daysOfWeek(weekStart), (day, dayIndex) => {
              return openBlock(), createElementBlock("div", {
                key: _ctx.getColumnDOWClass(dayIndex),
                draggable: _ctx.enableDateSelection,
                class: normalizeClass([
                  "cv-day",
                  _ctx.getColumnDOWClass(dayIndex),
                  "d" + _ctx.CalendarMath.isoYearMonthDay(day),
                  "d" + _ctx.CalendarMath.isoMonthDay(day),
                  "d" + _ctx.CalendarMath.paddedDay(day),
                  "instance" + _ctx.CalendarMath.instanceOfMonth(day),
                  {
                    today: _ctx.CalendarMath.isSameDate(day, _ctx.CalendarMath.today()),
                    outsideOfMonth: !_ctx.CalendarMath.isSameMonth(day, _ctx.defaultedShowDate),
                    past: _ctx.CalendarMath.isInPast(day),
                    future: _ctx.CalendarMath.isInFuture(day),
                    last: _ctx.CalendarMath.isLastDayOfMonth(day),
                    lastInstance: _ctx.CalendarMath.isLastInstanceOfMonth(day),
                    hasItems: _ctx.dayHasItems(day),
                    selectionStart: _ctx.CalendarMath.isSameDate(day, _ctx.selectionStart),
                    selectionEnd: _ctx.CalendarMath.isSameDate(day, _ctx.selectionEnd)
                  },
                  ..._ctx.dateClasses && _ctx.dateClasses[_ctx.CalendarMath.isoYearMonthDay(day)] || []
                ]),
                "aria-grabbed": _ctx.enableDateSelection ? _ctx.dayIsSelected(day) : void 0,
                "aria-label": day.getDate().toString(),
                "aria-selected": _ctx.dayIsSelected(day),
                "aria-dropeffect": _ctx.enableDragDrop && _ctx.currentDragItem ? "move" : _ctx.enableDateSelection && _ctx.dateSelectionOrigin ? "execute" : "none",
                onClick: ($event) => _ctx.onClickDay(day, $event),
                onDragstart: ($event) => _ctx.onDragDateStart(day, $event),
                onDrop: withModifiers(($event) => _ctx.onDrop(day, $event), ["prevent"]),
                onDragover: withModifiers(($event) => _ctx.onDragOver(day, $event), ["prevent"]),
                onDragenter: withModifiers(($event) => _ctx.onDragEnter(day, $event), ["prevent"]),
                onDragleave: withModifiers(($event) => _ctx.onDragLeave(day, $event), ["prevent"])
              }, [
                createElementVNode("div", _hoisted_7$1, toDisplayString(day.getDate()), 1),
                renderSlot(_ctx.$slots, "dayContent", { day })
              ], 42, _hoisted_6$1);
            }), 128)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getWeekItems(weekStart), (i) => {
              return renderSlot(_ctx.$slots, "item", {
                value: i,
                weekStartDate: weekStart,
                top: _ctx.getItemTop(i)
              }, () => [
                (openBlock(), createElementBlock("div", {
                  key: i.id,
                  draggable: _ctx.enableDragDrop,
                  "aria-grabbed": _ctx.enableDragDrop ? i == _ctx.currentDragItem : void 0,
                  class: normalizeClass([i.classes, "cv-item"]),
                  title: i.title,
                  style: normalizeStyle(`top:${_ctx.getItemTop(i)};${i.originalItem.style}`),
                  onDragstart: ($event) => _ctx.onDragItemStart(i, $event),
                  onMouseenter: ($event) => _ctx.onMouseEnterItem(i, $event),
                  onMouseleave: ($event) => _ctx.onMouseLeaveItem(i, $event),
                  onClick: withModifiers(($event) => _ctx.onClickItem(i, $event), ["stop"]),
                  innerHTML: _ctx.getItemTitle(i)
                }, null, 46, _hoisted_8))
              ]);
            }), 256))
          ])
        ], 2);
      }), 128))
    ], 8, _hoisted_3$1)
  ], 2);
}
var CalendarView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var CalendarViewHeader_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "CalendarViewHeader",
  props: {
    headerProps: {
      type: Object,
      required: true
    },
    previousYearLabel: { type: String, default: "<<" },
    previousPeriodLabel: { type: String, default: "<" },
    nextPeriodLabel: { type: String, default: ">" },
    nextYearLabel: { type: String, default: ">>" }
  },
  emits: ["input"],
  methods: {
    onInput(d) {
      this.$emit("input", d);
    }
  }
});
const _hoisted_1 = { class: "cv-header" };
const _hoisted_2 = { class: "cv-header-nav" };
const _hoisted_3 = ["disabled"];
const _hoisted_4 = ["disabled", "innerHTML"];
const _hoisted_5 = ["disabled"];
const _hoisted_6 = ["disabled"];
const _hoisted_7 = { class: "periodLabel" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode("button", {
        disabled: !_ctx.headerProps.previousYear,
        class: "previousYear",
        "aria-label": "Previous Year",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.onInput(_ctx.headerProps.previousYear), ["prevent"]))
      }, toDisplayString(_ctx.previousYearLabel), 9, _hoisted_3),
      createElementVNode("button", {
        disabled: !_ctx.headerProps.previousPeriod,
        class: "previousPeriod",
        "aria-label": "Previous Period",
        onClick: _cache[1] || (_cache[1] = withModifiers(($event) => _ctx.onInput(_ctx.headerProps.previousPeriod), ["prevent"])),
        innerHTML: _ctx.previousPeriodLabel
      }, null, 8, _hoisted_4),
      createElementVNode("button", {
        class: "currentPeriod",
        "aria-label": "Current Period",
        onClick: _cache[2] || (_cache[2] = withModifiers(($event) => _ctx.onInput(_ctx.headerProps.currentPeriod), ["prevent"]))
      }, toDisplayString(_ctx.headerProps.currentPeriodLabel), 1),
      createElementVNode("button", {
        disabled: !_ctx.headerProps.nextPeriod,
        class: "nextPeriod",
        "aria-label": "Next Period",
        onClick: _cache[3] || (_cache[3] = withModifiers(($event) => _ctx.onInput(_ctx.headerProps.nextPeriod), ["prevent"]))
      }, toDisplayString(_ctx.nextPeriodLabel), 9, _hoisted_5),
      createElementVNode("button", {
        disabled: !_ctx.headerProps.nextYear,
        class: "nextYear",
        "aria-label": "Next Year",
        onClick: _cache[4] || (_cache[4] = withModifiers(($event) => _ctx.onInput(_ctx.headerProps.nextYear), ["prevent"]))
      }, toDisplayString(_ctx.nextYearLabel), 9, _hoisted_6)
    ]),
    createElementVNode("div", _hoisted_7, [
      renderSlot(_ctx.$slots, "label", {}, () => [
        createTextVNode(toDisplayString(_ctx.headerProps.periodLabel), 1)
      ])
    ])
  ]);
}
var CalendarViewHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { CalendarMath, CalendarView, CalendarViewHeader };
