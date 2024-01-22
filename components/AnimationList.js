import Basic from "./Basic";
import CircleComp from "./Circle";
import WithTimingComp from "./WithTiming";

export const animationsByLevel = [
    {
      label: 'Beginner',
      animations: [
        { name: 'Basic', component: <Basic /> },
        { name: 'Circle', component: <CircleComp /> },
        { name: 'With Timing', component: <WithTimingComp /> },
      ],
    },
    {
      label: 'Intermediate',
      animations: [
       
      ],
    },
  ];