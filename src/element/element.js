import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import { Dialog, Tooltip, Table, TableColumn, Upload, Loading, Row, Col, Card, Form, TimePicker, Option, Select, FormItem, Input, DatePicker, Switch, CheckboxGroup, Checkbox, RadioGroup, Radio, Empty, Button, Collapse, CollapseItem, Message, Breadcrumb, BreadcrumbItem, Carousel, CarouselItem } from 'element-ui';


Vue.use(Button);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Col);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
Vue.use(DatePicker);
Vue.use(Dialog);

Vue.use(Empty);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Loading.directive);
Vue.use(Option);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(TimePicker);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tooltip);

Vue.use(Switch);
Vue.use(Select);
Vue.use(Upload);
Vue.use(Row);


Vue.prototype.$message = Message