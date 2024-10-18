'use client';
import React, { useState } from 'react';
import styles from './index.module.css';
import IconSearch from '../../../../../public/assets/icons/IconSearch';
import IconClose from '../../../../../public/assets/icons/IconClose';
import Input from '@/shared/components/atoms/input';
import Button from '@/shared/components/atoms/button';
import IconButton from '@/shared/components/atoms/icon-button';
import DropdownMenu from '@/shared/components/molecules/dropdown-menu';

const SearchField: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log(searchValue);
  };

  return (
    <div className={styles.search_field}>
      <DropdownMenu>전체</DropdownMenu>
      <label className={styles.label}>
        <div className={styles.search_icon}>
          <IconSearch />
        </div>
        <Input
          className={styles.serach}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder={'검색어를 입력하세요'}
        />
        {searchValue && (
          <div className={styles.close_icon}>
            <IconButton onClick={() => setSearchValue('')} icon={<IconClose />} />
          </div>
        )}
      </label>
      <Button className={styles.search_button} onClick={handleSearch} variant={'primary'} width={'8rem'} height={'3.5rem'}>
        검색하기
      </Button>
    </div>
  );
};

export default SearchField;
