
import CustomHeading from '../ui/custom-heading';
import CustomSubHeading from '../ui/custom-sub-heading';

const SectionTitle = ({ subName, hedName, classes }) => {
    return (
        <div id="section-title">
            <CustomSubHeading
                subName={subName}
                classes={`sub-heading ${classes}`}
            />
            <CustomHeading
                hedName={hedName}
                classes={`heading ${classes}`}
            />
        </div>
    ) 
}
export default SectionTitle
