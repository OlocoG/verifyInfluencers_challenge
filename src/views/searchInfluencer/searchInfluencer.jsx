import styles from "./searchInfluencer.module.css";
import SwitchButton from "../../components/switchButton.jsx";
import { useFormik } from "formik";
import { useState } from "react";
import { validateForm } from "../../helpers/validation.js";
export default function SearchInfluencer() {
  // eslint-disable-next-line no-unused-vars
  const [selectedButton, setSelectedButton] = useState("");
  const [newJournal, setNewJournal] = useState("");
  const [showNewJournalInput, setShowNewJournalInput] = useState(false);
  const formik = useFormik({
    initialValues: {
      tipeOfInfluencer: "",
      timeRange: "",
      productsToFind: "",
      includeRenevueAnalysis: false,
      verifyWithScientificJournals: false,
      influencerName: "",
      claimsToAnalize: "",
      scientisJournals: [],
      notesForResearchAssistant: "",
    },
    validate: validateForm,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // Función para manejar la selección del botón
  const handleButtonClick = (value) => {
    // Actualizar el valor seleccionado en el estado
    setSelectedButton(value);
    // Actualizar el valor en Formik
    formik.setFieldValue("tipeOfInfluencer", value);
  };

  // Función para manejar "Select All"
  const handleSelectAll = () => {
    formik.setFieldValue("scientisJournals", [
      "Pubmed Central",
      "Science",
      "The Lancet",
      "Nature",
      "Cell",
      "New England Journal of Medicine",
      "JAMA Network",
    ]);
  };

  // Función para manejar "Deselect All"
  const handleDeselectAll = () => {
    formik.setFieldValue("scientisJournals", []);
  };

  // Función para manejar la selección de un journal individual
  const handleJournalClick = (journal) => {
    const scientisJournals = [...formik.values.scientisJournals];
    if (scientisJournals.includes(journal)) {
      // Si ya está seleccionado, lo deseleccionamos
      formik.setFieldValue(
        "scientisJournals",
        scientisJournals.filter((item) => item !== journal)
      );
    } else {
      // Si no está seleccionado, lo seleccionamos
      scientisJournals.push(journal);
      formik.setFieldValue("scientisJournals", scientisJournals);
    }
  };

  // Función para manejar la adición de un nuevo journal
  const handleAddNewJournal = () => {
    if (newJournal) {
      formik.setFieldValue("scientisJournals", [
        ...formik.values.scientisJournals,
        newJournal,
      ]);
      setNewJournal("");
      setShowNewJournalInput(false); // Ocultar input después de agregarlo
    }
  };
  return (
    <>
      <h1>Research Task</h1>
      <div
        style={{
          backgroundColor: "rgb(46, 67, 87) ",
          padding: "auto",
          width: "70%",
          height: "100%",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          margin: "auto",
          border: "1px solid #ccc",
        }}
      >
        <h2 style={{ paddingLeft: "10px" }}>Research Configuration</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.parent}>
            <div className={styles.div2}>
              <button
                onClick={() => handleButtonClick("specificInfluencer")}
                type="button"
              >
                <h3>Specific Influencer</h3>
                <p>Research a know healt influencer by name</p>
              </button>
            </div>
            <div
              className={styles.div3}
              onClick={() => handleButtonClick("discoverNew")}
            >
              <button type="button">
                <h3>Discover New</h3>
                <p>Find and analyze new healt influencers</p>
              </button>
            </div>
            <div className={styles.div4}>
              <h3> Time range</h3>
            </div>
            <div className={styles.div5}>
              <button
                type="button"
                onClick={() => formik.setFieldValue("timeRange", "Last Week")}
              >
                Last Week
              </button>
              <button
                type="button"
                onClick={() => formik.setFieldValue("timeRange", "Last Month")}
              >
                Last Month
              </button>
              <button
                type="button"
                onClick={() => formik.setFieldValue("timeRange", "Last Year")}
              >
                Last Year
              </button>
              <button
                type="button"
                onClick={() => formik.setFieldValue("timeRange", "All Time")}
              >
                All Time
              </button>
            </div>

            <div className={styles.div6}>
              <h3>Products to find Per Influencer</h3>
              <input
                type="text"
                name="productsToFind"
                placeholder="set to 0 to skip product research"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* Solo aparece el error si el campo ha sido tocado */}
              {formik.touched.productsToFind && formik.errors.productsToFind ? (
                <label className={styles.errorMessage}>
                  {formik.errors.productsToFind}
                </label>
              ) : (
                ""
              )}
            </div>
            <div className={styles.div7}>
              <h4>Include Renevue Analisis</h4>
              <SwitchButton
                checked={formik.values.includeRenevueAnalysis}
                onChange={() =>
                  formik.setFieldValue(
                    "includeRenevueAnalysis",
                    !formik.values.includeRenevueAnalysis
                  )
                }
              ></SwitchButton>
              <p>Analize monetization method and estimate earnings</p>
            </div>
            <div className={styles.div8}>
              <h4>Verify with Scientific Journals</h4>
              <SwitchButton
                onChange={() =>
                  formik.setFieldValue(
                    "verifyWithScientificJournals",
                    !formik.values.verifyWithScientificJournals
                  )
                }
              ></SwitchButton>
              <p>Cross reference claims with scientific literature</p>
            </div>
            <div className={styles.div9}>
              <h3> Influencer Name</h3>
              <input
                type="text"
                name="influencerName"
                placeholder="Enter influencer name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* Solo aparece el error si el campo ha sido tocado */}
              {formik.touched.influencerName && formik.errors.influencerName ? (
                <label className={styles.errorMessage}>
                  {formik.errors.influencerName}
                </label>
              ) : (
                ""
              )}
            </div>
            <div className={styles.div10}>
              <h3> Claims to analize Per Influencer</h3>
              <input
                type="text"
                name="claimsToAnalize"
                placeholder="Recomended: 50-100 claims for comprehensive analysis"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* Solo aparece el error si el campo ha sido tocado */}
              {formik.touched.claimsToAnalize && formik.errors.claimsToAnalize ? (
                <label className={styles.errorMessage}>
                  {formik.errors.claimsToAnalize}
                </label>
              ) : (
                ""
              )}
            </div>
            <div className={styles.div11}>
              <h3>Scientist Journals</h3>
            </div>
            <div className={styles.div18}>
              <button type="button" onClick={handleSelectAll}>
                Select All
              </button>
              <button type="button" onClick={handleDeselectAll}>
                Deselect All
              </button>
            </div>

            {/* Botones para journals */}
            <div className={styles.div12}>
              <button
                type="button"
                onClick={() => handleJournalClick("Pubmed Central")}
              >
                Pubmed Central
              </button>
            </div>
            <div className={styles.div13}>
              <button
                type="button"
                onClick={() => handleJournalClick("Science")}
              >
                Science
              </button>
            </div>
            <div className={styles.div14}>
              <button
                type="button"
                onClick={() => handleJournalClick("The Lancet")}
              >
                The Lancet
              </button>
            </div>
            <div className={styles.div19}>
              <button
                type="button"
                onClick={() => handleJournalClick("Nature")}
              >
                Nature
              </button>
            </div>
            <div className={styles.div20}>
              <button type="button" onClick={() => handleJournalClick("Cell")}>
                Cell
              </button>
            </div>
            <div className={styles.div21}>
              <button
                type="button"
                onClick={() =>
                  handleJournalClick("New England Journal of Medicine")
                }
              >
                New England Journal of Medicine
              </button>
            </div>
            <div className={styles.div22}>
              <button
                type="button"
                onClick={() => handleJournalClick("JAMA Network")}
              >
                JAMA Network
              </button>
              <button
                type="button"
                onClick={() => setShowNewJournalInput(!showNewJournalInput)}
              >
                {showNewJournalInput ? "Cancel" : "Add New Journal"}
              </button>
              {showNewJournalInput && (
                <div className={styles.newJournalInput}>
                  <input
                    type="text"
                    value={newJournal}
                    onChange={(e) => setNewJournal(e.target.value)}
                    placeholder="Enter new journal"
                  />
                  <button type="button" onClick={handleAddNewJournal}>
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.div23}>
            <h3>Notes for Research Assistant</h3>
            <input
              type="text"
              name="notesForResearchAssistant"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Add any specific instructions or focus areas"
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
