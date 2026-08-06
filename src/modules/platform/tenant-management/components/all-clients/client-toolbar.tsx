import { Download } from "lucide-react";
import { useState } from "react";

import {
  FilterSelect,
  FilterToolbar,
  SearchInput,
} from "@/shared/components/platform/filters";

import { Button } from "@/shared/ui/button";

import { countryOptions, packageOptions, statusOptions } from "../../mock";

export function ClientToolbar() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [pkg, setPackage] = useState("all");

  const [country, setCountry] = useState("all");

  return (
    <FilterToolbar>
      <SearchInput
        value={search}
        placeholder="Search by client, email or company..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <FilterSelect
        value={status}
        placeholder="Status"
        options={statusOptions}
        onChange={setStatus}
        searchable={false}
      />

      <FilterSelect
        value={pkg}
        placeholder="Package"
        options={packageOptions}
        onChange={setPackage}
        searchable={false}
      />

      <FilterSelect
        value={country}
        placeholder="Country"
        options={countryOptions}
        onChange={setCountry}
        searchable={false}
      />

      <Button variant="outline" className="h-11 rounded-xl px-5">
        <Download className="size-4" />
        Export
      </Button>
    </FilterToolbar>
  );
}
