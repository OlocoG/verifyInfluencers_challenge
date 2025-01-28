import styles from './searchInfluencer.module.css';
import SwitchButton from '../../components/switchButton.jsx';
export default function SearchInfluencer() {
  return (
    <>
      <h1>Research Task</h1>
      <div>
        <h2>Research Configuration</h2>
        <form>
          <div className={styles.parent}>
            <div className={styles.div1}>
                <button>
                    <h3>Specific Influencer</h3>
                    <p>Research a know healt influencer by name</p>
                </button>
            </div>
            <div className={styles.div2}>
                <button>
                    <h3>Discover New</h3>
                    <p>Find and analyze new healt influencers</p>
                </button>
            </div>
            <div className={styles.div3}>
                <h3> Time range</h3>
            </div>
            <div className={styles.div4}>
                <button>Last Week</button>
            </div>
            <div className={styles.div5}>
            <button>Last Month</button>
            </div>
            <div className={styles.div6}>
            <button>Last Year</button>
            </div>
            <div className={styles.div7}>
            <button>All Time</button>
            </div>
            <div className={styles.div8}>
                <h3>Products to find Per Influencer</h3>
            </div>
            <div className={styles.div9}>
                <input type="text" placeholder='set to 0 to skip product research'/>
            </div>
            <div className={styles.div10}>
                <h4>Include Renevue Analisis</h4>
                <p>Analize monetization method and estimate earnings</p>
                <SwitchButton></SwitchButton>
            </div>
            <div className={styles.div11}>
                <h4>Verify with Scientific Journals</h4>
                <p>Cross reference claims with scientific literature</p>
                <SwitchButton></SwitchButton>
            </div>
            <div className={styles.div12}>
                <h3> Influencer Name</h3>
                <input type="text" placeholder='Enter influencer name'/>
            </div>
            <div className={styles.div13}>
                <h3> Claims to analize Per Influencer</h3>
                <input type="text" placeholder='Recomended: 50-100 claims for comprehensive analysis'/>
            </div>
            <div className={styles.div14}>
            <h3> Sciencist Journals</h3>
            </div>
            <div className={styles.div15}>
            <h3>Select All | Deselect All</h3>
            </div>
            <div className={styles.div16}>
                <button>Pubmed Central</button>
            </div>
            <div className={styles.div17}>
                <button>Nature</button>
            </div>
            <div className={styles.div18}>
                <button>Science</button>
            </div>
            <div className={styles.div19}>
                <button>Cell</button>
            </div>
            <div className={styles.div20}>
                <button>The Lancet</button>
            </div>
            <div className={styles.div21}>
                <button>New England Journal of Medicine</button>
            </div>
            <div className={styles.div22}>
                <button>JAMA Network</button>
                <p>Add new jornal</p>
            </div>
            <div className={styles.div23}>
                <h3>Notes for Research Assistant</h3>
                <input type="text" name="instructions" id="instructions" placeholder='Add any specific instructions or focus areas'/>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
