import Footer from "../Components/Footer"


const GuideForAuthors = () => {
    return (
        <>
        <div className="container mx-auto px-4 py-8 bg-[#FAFAFA]">
            <h1 className="text-2xl font-bold mb-4">Guide for Authors</h1>
            <h2 className="text-xl">Manusript Preparation:</h2>
            <p className="mb-4">
                <strong>Submission of papers: </strong>
                The manuscript must be written in MS Word Format. All correspondence, including notification of the Editors decision and requests for revision, takes place by e-mail and/or via the Authors homepage, removing the need for a hard-copy paper trail.
                Original manuscripts including original figures should be accompanied by a covering letter uploaded via the submission link or journal e-mail. Authors could also submit manuscript through the Editor-in-Chiefs e-mail address.
            </p>
            <p className="mb-4">
                <strong>Original material: </strong> Submission of an article implies that the work described has not been published previously (except in the form of an abstract or as part of a published lecture or academic thesis), that it is not under consideration for publication elsewhere, that its publication is approved by all authors and that, if accepted, it will not be published elsewhere in the same form, in English or in any other language, without the written consent of the Publisher. Authors found to be deliberately contravening the submission guidelines on originality and exclusivity shall not be considered for future publication in this journal
            </p>
            <h1 className="text-xl">Manuscript Preparation:</h1>
            <h1 className="text-xl">General:</h1>
            <p className="mb-4">
            Editors reserve the right to adjust style to certain standards of uniformity. Original manuscripts are discarded after publication unless the Publisher is asked to return original material after use. If online submission is not possible, an electronic copy of the manuscript on disk should accompany the final accepted hardcopy version. Please use MS Word for the text of your manuscript.
            </p>
            <h1 className="text-xl">Structure:</h1>
            <p className="mb-4">
            Follow this order when typing manuscripts: Title, Authors, Affiliations, Abstract, Keywords, Introduction, Main text, Conclusions, Acknowledgements, Appendix, References, Figure Captions, Figures and then Tables.
            </p>
            <h1 className="text-xl">Text Layout:</h1>
            <p className="mb-4">
            Use 1.5 spacing and wide (3 cm) margins. Ensure that each new paragraph is clearly indicated. Nomenclature should conform to that most frequently used in the scientific field concerned. Number all pages consecutively; use 12 font size and standard font of Times New Roman. If submitting in hardcopy, print the entire manuscript on one side of the paper only.
            </p>
            <h1 className="text-xl">Corresponding author:</h1>
            <p className="mb-4">
            Clearly indicate who is responsible for correspondence at all stages of refereeing and publication, including post-publication. The corresponding author should be identified with an asterisk and footnote. Ensure that telephone is provided in addition to the e-mail address and the complete postal address. Full postal addresses must be given for all co-authors.
            </p>
            <h1 className="text-xl">Abstract:</h1>
            <p className="mb-4">
            A self-contained abstract outlining in a single paragraph the aims, scope and conclusions of the paper must be supplied.
            </p>
            <h1 className="text-xl">Keywords:</h1>
            <p className="mb-4">
            A self-contained abstract outlining in a single paragraph the aims, scope and conclusions of the paper must be supplied.
            </p>
            <h1 className="text-xl">Symbols:</h1>
            <p className="mb-4">
            All Greek letters and unusual symbols should be identified by name in the margin, the first time they are used.
            </p>
            <h1 className="text-xl">Units:</h1>
            <p className="mb-4">
            Follow internationally accepted rules and conventions: use the international system of units (SI). If other quantities are mentioned, give their equivalent in SI.
            </p>
            <h1 className="text-xl">Maths:</h1>
            <p className="mb-4">
            Number consecutively any equations that have to be displayed separately from the text (if referred to explicitly in the text).
            </p>
            <h1 className="text-xl">Reference:</h1>
            <p className="mb-4">
            All publications cited in the text should be presented in a list of references following the text of the manuscript.

            Text: Indicate references by number(s) in square brackets in line with the text. The actual authors can be referred to, but the reference number(s) must always be given.

            List: Number the references (numbers in square brackets) in the list in the order in which they appear in the text.
            </p>
            <h1 className="text-xl">Examples:</h1>
            <p className="mb-4">
            Reference to a journal publication:
            <br />
            [1] N.A. Raji, R.O. Ogunleye, “Design and Construction of Tilling Machine for Small Scale Farming”. Nigeria Society of Engineers Technical Transactions, Vol. 43, No. 3, 2008, 14-26.
            <br />
            <br />

            Reference to a book:
            <br />
            [2] Oyetuni E.O., Raji, N.A. The Elements of Optimization. 3rd ed. New York: Macmillan; 2012.
            <br />
            <br />

            Reference to a conference proceeding:
            <br />
            [3] K.F.K. Oyedeko, A.I.O. Yussuff, A.A. Adenowo. “Modeling of solar-assisted double-tube evaporator heat pump system under local climate conditions”. 2nd International Engineering and Entrepreneurial Conference, Lagos, Nigeria, 1996.
            <br />
            <br />

            Reference to a chapter in an edited book:
            <br />
            [4] Ishola, M. Elements of polymeric materials. In: Adedeji K.A., Adefuye A.O., editors. Introduction to material science, New York: E-Publishing Inc; 2006, p. 176-288
            <br />
            <br />
            </p>
            <h1 className="text-xl">Tables:</h1>
            <p className="mb-4">
            Tables should be numbered consecutively and given suitable captions and each table should begin on a new page. No vertical rules should be used. Tables should not unnecessarily duplicate results presented elsewhere in the manuscript (for example, in graphs).
            </p>
            <h1 className="text-xl">Supplying Final Accepted Text on Disk:</h1>
            <p className="mb-4">
            If online submission is not possible: Once the paper has been accepted by the editor, an electronic version of the text should be submitted together with the final hardcopy of the manuscript. The electronic version must match the hardcopy exactly. We accept MS Word format only. Always keep a backup copy of the electronic file for reference and safety. Label the disk with your name. Electronic files can be stored on CD.
            </p>
            <h1 className="text-xl">Notification:</h1>
            <p className="mb-4">
            Authors will be notified of the acceptance of their paper by the editor. The Publisher will also send a notification of receipt of the paper in production.

            Page charges:
            Publication in this journal carry a charge of #35,000 (USD 50) for the first twelve pages and #5,000 (USD 15) charge for every extra page.

            Offprints:
            A copy of the journal issue in which the article appears will be available upon request.
            </p>
        </div>
        <div>
            <Footer />
        </div>
        </>
    );
};

export default GuideForAuthors;