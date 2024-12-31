import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectLanguage = () => {
  return (
    <Select defaultValue="english">
      <SelectTrigger className="w-[120px] ">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="english">English</SelectItem>
        <SelectItem value="vietnamese">Vietnamese</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectLanguage;
