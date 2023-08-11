
//////////sill bar///////////
function animateSkills() {
    let executed = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !executed) {
          $('.skill-per').each(function () {
            let $this = $(this);
            let per = $this.attr('per');
            $this.css({
              width: per + "%"
            });
            $({
              aniValue: 0
            }).animate({
              aniValue: per
            }, {
              duration: 1000,
              step: function () {
                $this.attr("per", Math.ceil(this.aniValue) + "%");
              },
            });
          });
 
          executed = true;
          observer.disconnect();
        }
      });
    });
 
    const skillBarsElement = document.querySelector('.skill_bars');
    observer.observe(skillBarsElement);
  }
  animateSkills();