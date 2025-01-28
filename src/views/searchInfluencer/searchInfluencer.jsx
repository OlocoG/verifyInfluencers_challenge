import styles from "./searchInfluencer.module.css";
import SwitchButton from "../../components/switchButton.jsx";
import { useFormik } from "formik";
export default function SearchInfluencer() {
    const formik = useFormik({
        initialValues: {
            tipeOfInfluencer: "",
            timeRange: "",
            productsToFind: "",
            includeRenevueAnalysis: "",
            verifyWithScientificJournals: "",
            influencerName: "",
            claimsToAnalize: "",
            scientisJournals: "",
            notesForResearchAssistant: "",
        },
    })
  return (
    <>
      <h1>Research Task</h1>
      <div style={{ backgroundColor: "rgb(46, 67, 87) ", padding: "auto", width: "auto", height: "auto" }}>
        <h2 style={{ paddingLeft: "10px" }}>Research Configuration</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.parent}>
            <div className={styles.div2}>
            <button>
                    <h3>Specific Influencer</h3>
                    <p>Research a know healt influencer by name</p>
                </button>
            </div>
            <div className={styles.div3}><button>
                    <h3>Discover New</h3>
                    <p>Find and analyze new healt influencers</p>
                </button>
            </div>
            <div className={styles.div4}>
                <h3> Time range</h3>
            </div>
            <div className={styles.div5}>
            <button>Last Week</button>
                <button>Last Month</button>
                <button>Last Year</button>
                <button>All Time</button>
            </div>
            <div className={styles.div6}>
                <h3>Products to find Per Influencer</h3>
                <input type="text" placeholder='set to 0 to skip product research'/>
            </div>
            <div className={styles.div7}>
            <h4>Include Renevue Analisis</h4>
            <SwitchButton></SwitchButton>
            <p>Analize monetization method and estimate earnings</p>
            </div>
            <div className={styles.div8}>
                <h4>Verify with Scientific Journals</h4>
                <SwitchButton></SwitchButton>
                <p>Cross reference claims with scientific literature</p>
            </div>
            <div className={styles.div9}>
                <h3> Influencer Name</h3>
                <input type="text" placeholder='Enter influencer name'/>
            </div>
            <div className={styles.div10}>
                <h3> Claims to analize Per Influencer</h3>
                <input type="text" placeholder='Recomended: 50-100 claims for comprehensive analysis'/>
            </div>
            <div className={styles.div11}>
                <h3> Sciencist Journals</h3>
            </div>
            <div className={styles.div12}>
                <button>Pubmed Central</button>
            </div>
            <div className={styles.div13}>
                <button>Science</button>
            </div>
            <div className={styles.div14}>
                <button>The Lancet</button>
            </div>
            <div className={styles.div18}>
                <h3>Select All | Deselect All</h3>
            </div>
            <div className={styles.div19}>
                <button>Nature</button>
            </div>
            <div className={styles.div20}>
                <button>Cell</button>
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
