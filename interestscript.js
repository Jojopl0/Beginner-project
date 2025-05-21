const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('RLHidden')) {
                entry.target.classList.add('RLShow')
            }
            else if (entry.target.classList.contains('LRHidden')) {
                entry.target.classList.add('LRShow')
            }
            else if (entry.target.classList.contains('LRIHidden')) {
                entry.target.classList.add('LRIShow')
            }
            else if (entry.target.classList.contains('RLIHidden')) {
                entry.target.classList.add('RLIShow')
            }
            else if (entry.target.classList.contains('UDHidden')) {
                entry.target.classList.add('UDShow')
            }
            else if (entry.target.classList.contains('DUHidden')) {
                entry.target.classList.add('DUShow')
            }
            else if (entry.target.classList.contains('LLRIHidden')) {
                entry.target.classList.add('LLRIShow')
            }
            else if (entry.target.classList.contains('RRLIHidden')) {
                entry.target.classList.add('RRLIShow')
            }
            
        }
        else {
            entry.target.classList.remove('RLShow')
            entry.target.classList.remove('LRShow')
            entry.target.classList.remove('LRIShow')
            entry.target.classList.remove('RLIShow')
            entry.target.classList.remove('UDShow')
            entry.target.classList.remove('DUShow')
            entry.target.classList.remove('LLRIShow')
            entry.target.classList.remove('RRLIShow')
        }
    })
}) ;

const RLElements = document.querySelectorAll('.RLHidden, .LRHidden, .LRIHidden, .RLIHidden, .UDHidden, .DUHidden, .LLRIHidden, .RRLIHidden');
RLElements.forEach((el) => observer.observe(el))




const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});