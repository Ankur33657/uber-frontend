import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";
const CreatePost = () => {
  return (
    <div className="p-3 bg-white shadow-lg rounded-md border-2 border-solid border-slate-200">
      <div className="flex flex-row items-start">
        <span className="material-symbols-outlined p-1 bg-primary rounded-full text-white mt-1">
          face
        </span>
        <Textarea
          placeholder="Share your ride experience..."
          className="text-sm border-0 focus-visible:ring-0 focus-visible:ring-offset-0 "
        />
      </div>
      <div className="border-t border-gray-200 my-2" />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-1 items-center p-1">
          <span className="material-symbols-outlined text-slate-400 ">
            image
          </span>
          <span className="material-symbols-outlined text-slate-400">
            location_on
          </span>
          <span className="material-symbols-outlined text-slate-400">sell</span>
        </div>
        <Badge variant="contained">Post</Badge>
      </div>
    </div>
  );
};
export default CreatePost;
