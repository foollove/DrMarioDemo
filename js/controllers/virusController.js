app.controller('virusController',function($scope){
  var virusController = this;
  $scope.viruses = [
    {
      name: "Chill",
      color: "#15639D",
      symptoms: "Low fever, shivering, runny nose, sore throat",
      severity: "mild",
      date_discovered: "",
      description:"A blue devil that chills the afflicted to the bone, sending them into uncontrollable convulsions.",
      gallery: ['','',''],
      image:'chill.png'
    },
    {
      name: "Fever",
      color: "#D62027",
      symptoms: "High fever, sweats, headache, drowsiness",
      severity: "severe",
      date_discovered: "",
      description:"A little red virus that causes the afflicted to hallucinate.",
      gallery: ['','',''],
      image:'fever.png'
    },
    {
      name: "Weird",
      color: "#FDBD30",
      symptoms: "High fever, sweats, headache, drowsiness",
      severity: "severe",
      date_discovered: "",
      description:"A strange yellow fellow that causes depression and anxiety in the afflicted individual.",
      gallery: ['','',''],
      image:'weird.png'
    }
  ];
});
